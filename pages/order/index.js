import { useEffect, useState } from "react";
import { Header, Image, Modal, Dimmer, Loader } from "semantic-ui-react";
import Button from "../../components/Button/Button";
import styles from "../../styles/Order.module.css";
import { useRouter } from "next/router";
import { COOKIE_TOKEN, USER_DETAILS } from "../../utils/constants";
import { toast } from "react-toastify";
import { STUDENT_DASHBOARD_PATH } from "../../utils/routes";
import axiosInstance from "../../utils/axiosInstance";
import jsCookie from "js-cookie";

function loadScript(src) {
  return new Promise(resolve => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export default function Order({}) {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orderDetails, setOrderDetails] = useState({});

  useEffect(() => {
    getPaymentDetails();
  }, []);

  const getPaymentDetails = async () => {
    setLoading(true);
    const batchId = router.query.id;
    try {
      const response = await axiosInstance.get(
        `/getCoursePurchaseDetail?batch_id=${batchId}`
      );
      setOrderDetails(response.data.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  const setFinalPayment = async transacation_id => {
    setLoading(true);
    const payload = {
      access_token: jsCookie.get(COOKIE_TOKEN),
      attampt_id: "",
      transacation_id: transacation_id,
      amount: orderDetails.batch_purchase_price,
      pay_amount: orderDetails.batch_purchase_price,
      lang: orderDetails.language_code,
      batch_id: orderDetails.batch_id
    };
    try {
      const response = await axiosInstance.post(`/makeCoursePayment`, payload);
      setLoading(false);
      setOpenModal(true);
    } catch (err) {
      setLoading(false);
    }
  };
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      toast.error("Razorpay SDK failed to load. Are you online?", {
        theme: "colored"
      });
      return;
    }
    const response = await axiosInstance.post(`/initRazorpay`, {
      access_token: jsCookie.get(COOKIE_TOKEN),
      amount: orderDetails.batch_purchase_price
    });

    const userDetails =
      typeof window !== "undefined" &&
      localStorage.getItem(USER_DETAILS) &&
      JSON.parse(localStorage.getItem(USER_DETAILS));

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      currency: response.data.currency,
      amount: response.data.amount.toString(),
      order_id: response.data.id,
      name: "Tremendo",
      description: `Purchase ${orderDetails.batch_language} language`,
      image: `https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Ftremendo_logo.png?alt=media&token=2180fdbc-cab2-4f3e-9721-cd61da3348ba`,
      handler: function(response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
        setFinalPayment(response.razorpay_payment_id);
      },
      prefill: {
        name: userDetails.name,
        email: userDetails.email
      }
    };
    try {
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      toast.error("Razorpay SDK failed to load. Are you online?", {
        theme: "colored"
      });
    }
  }

  const onCloseModal = () => {
    setOpenModal(false);
    router.replace(STUDENT_DASHBOARD_PATH);
  };

  return (
    <>
      {loading && (
        <Dimmer active>
          <Loader />
        </Dimmer>
      )}
      <div className={styles.base}>
        <div className={styles.heading}>Summary</div>
        <div className={styles.imageDetailWrapper}>
          <div className={styles.flagImage}>
            <Image src={orderDetails.flag_url} alt={"flag"} height="58px" />
          </div>
          <div className={styles.details}>
            <div
              className={styles.courseName}
            >{`${orderDetails.batch_language} Course - Batch-${orderDetails.batch_id}`}</div>
            <div className={styles.description}>
              {`You are purchasing for ${orderDetails.batch_language} language which is starting from ${orderDetails.batch_starting_date}. Are you want to purchase?`}
            </div>
          </div>
        </div>
        <div className={styles.priceWrapper}>
          <div className={styles.orignalPriceHeading}>Orignal Price:</div>
          <div className={styles.price}>
            {" "}
            &#x20b9; {orderDetails.batch_purchase_price}
          </div>
        </div>
        <div className={styles.totalPriceWrapper}>
          <div className={styles.orignalPriceHeading}>Total:</div>
          <div className={styles.price}>
            {" "}
            &#x20b9; {orderDetails.batch_purchase_price}
          </div>
        </div>
        <div className={styles.continueBtn}>
          <Button
            label={"Continue Payment"}
            height={50}
            backgroundColor={"#25908d"}
            textStyle={{
              color: "#fff",
              fontFamily: "Poppins",
              fontSize: "20px",
              fontWeight: "700"
            }}
            border="none"
            onClick={() => displayRazorpay()}
          />
        </div>
      </div>
      <div className={styles.termAndCondition}>
        By completing your purchase you agree to these{" "}
        <span
          onClick={() => console.log("go to tc")}
          style={{ color: "#0656cf", cursor: "pointer" }}
        >
          Terms of Service.
        </span>
      </div>
      <Modal
        onClose={() => onCloseModal()}
        open={openModal}
        closeIcon
        className={styles.modalStyles}
      >
        <Modal.Content image>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fsuccess_image.png?alt=media&token=a22dbbd8-88a7-46b1-b725-60f117beafc0"
            wrapped
            alt="success image"
          />
        </Modal.Content>
      </Modal>
    </>
  );
}
