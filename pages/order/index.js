import { useEffect, useState } from "react";
import { Header, Image, Modal } from "semantic-ui-react";
import Button from "../../components/Button/Button";
import styles from "../../styles/Order.module.css";
import { useRouter } from "next/router";
import { USER_DETAILS } from "../../utils/constants";
import { toast } from "react-toastify";
import { STUDENT_DASHBOARD_PATH } from "../../utils/routes";

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

    const data = await fetch("https://tremendo.in:5555/razorpay", {
      method: "POST"
    }).then(t => t.json());

    const userDetails =
      typeof window !== "undefined" &&
      localStorage.getItem(USER_DETAILS) &&
      JSON.parse(localStorage.getItem(USER_DETAILS));

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Tremendo",
      description: "Purchase japanese language",
      image: `${window.location.origin}/Images/tremendo_logo.png`,
      handler: function(response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
        setOpenModal(true);
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
      <div className={styles.base}>
        <div className={styles.heading}>Summary</div>
        <div className={styles.imageDetailWrapper}>
          <div className={styles.images}>
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/english_flag.png?alt=media&token=426f6879-24af-4182-a3e7-3cbc39f9622c"
              }
              alt={"flag"}
            />
          </div>
          <div className={styles.details}>
            <div className={styles.courseName}>English Course - Batch-2</div>
            <div className={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
        </div>
        <div className={styles.priceWrapper}>
          <div className={styles.orignalPriceHeading}>Orignal Price:</div>
          <div className={styles.price}> &#x20b9; 100</div>
        </div>
        <div className={styles.totalPriceWrapper}>
          <div className={styles.orignalPriceHeading}>Total:</div>
          <div className={styles.price}> &#x20b9; 100</div>
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
          <Image src="/Images/success_image.png" wrapped alt="success image" />
        </Modal.Content>
      </Modal>
    </>
  );
}
