import React, { useState, useEffect } from "react";
import styles from "./AdminPages.module.css";
import {
  List,
  Popup,
  Icon,
  Rating,
  Modal,
  Header,
  Button,
  Input,
  Dropdown
} from "semantic-ui-react";
import ButtonComponent from "../Button/Button";
import axiosInstance from "../../utils/axiosInstance";
import Cookies from "js-cookie";
import { COOKIE_TOKEN } from "../../utils/constants";
import { getReviewDetails } from "../../Context/Actions/Home/HomeAction";

const ADD = "Add";
const EDIT = "Edit";

export default function AdminPages({}) {
  const [selected, setSelected] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(null);
  const [openBlogModal, setOpenBLogModal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [addFaqFeilds, setAddFaqFeilds] = useState({});
  const [addBlogFeild, setAddBlogFeild] = useState({});
  const [faqList, setFaqList] = useState([]);
  const [blogsList, setBlogList] = useState([]);
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    getFaqs();
    getBlogs();
    getReviewList();
  }, []);

  const getFaqs = async () => {
    try {
      const response = await axiosInstance.get(`/getCourseFaqs`);
      setFaqList(response.data.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  const getBlogs = async () => {
    try {
      const response = await axiosInstance.get(`/getCourseBlogList`);
      setBlogList(response.data.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  const getReviewList = async () => {
    try {
      const response = await axiosInstance.get(
        `/getCourseReview?access_token=${Cookies.get(COOKIE_TOKEN)}`
      );
      setReviewList(response.data.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  const toggleSelectedOption = index => {
    setSelected(index);
  };
  const onCloseModal = () => {
    setOpenModal(false);
  };
  const onHandleFaqChange = (data, type) => {
    setAddFaqFeilds({ ...addFaqFeilds, [type]: data.value });
  };
  const onHandleBlogChange = (data, type) => {
    setAddBlogFeild({ ...addBlogFeild, [type]: data.value });
  };

  const onSaveFaq = async () => {
    setLoading(true);
    const payload = {
      ...addFaqFeilds,
      access_token: Cookies.get(COOKIE_TOKEN),
      lang: "common"
    };
    try {
      const response = await axiosInstance.post(`/addCourseFaq`, payload);
      getFaqs();
      setLoading(false);
      setOpenModal(false);
    } catch (err) {
      setLoading(false);
      setOpenModal(false);
    }
  };

  const onEditFaqSave = async () => {
    setLoading(true);
    const payload = {
      ...addFaqFeilds,
      access_token: Cookies.get(COOKIE_TOKEN),
      lang: "common",
      faqId: openEditModal.faq_id
    };
    try {
      const response = await axiosInstance.post(`/updateCourseFaq`, payload);
      getFaqs();
      setLoading(false);
      setOpenEditModal(null);
    } catch (err) {
      setLoading(false);
      setOpenEditModal(null);
    }
  };
  const onDeleteFaq = async id => {
    try {
      const response = await axiosInstance.delete(
        `/deleteCourseFaq?faqId=${id}&access_token=${Cookies.get(COOKIE_TOKEN)}`
      );
      getFaqs();
    } catch (err) {}
  };
  const user_type = [
    {
      text: "Student",
      value: "student"
    },
    {
      text: "Mentor",
      value: "mentor"
    },
    {
      text: "Common",
      value: "common"
    }
  ];
  const addFaqsModals = () => {
    return (
      <Modal
        onClose={() => onCloseModal()}
        open={openModal}
        closeIcon
        size={"tiny"}
      >
        <Modal.Header>Create FAQ</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Add Question..."
                size="large"
                onChange={(e, data) => onHandleFaqChange(data, "faq")}
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Add Answer..."
                size="large"
                onChange={(e, data) => onHandleFaqChange(data, "answer")}
                style={{ width: "100%" }}
              />
            </div>
            <div>
              <Dropdown
                className={styles.batchedDropdown}
                fluid
                selection
                placeholder="Select User type"
                options={user_type}
                onChange={(e, data) => onHandleFaqChange(data, "faq_type")}
              />
            </div>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpenModal(false)}>
            Close
          </Button>
          <Button
            content="Create"
            labelPosition="right"
            icon="checkmark"
            onClick={() => onSaveFaq()}
            positive
            loading={loading}
          />
        </Modal.Actions>
      </Modal>
    );
  };
  const onEditFaq = data => {
    setAddFaqFeilds({
      ...addFaqFeilds,
      ["faq"]: data.faq,
      ["answer"]: data.answer
    });
    setOpenEditModal(data);
  };
  const editFaqModal = () => {
    return (
      <Modal
        onClose={() => setOpenEditModal(null)}
        open={openEditModal ? true : false}
        closeIcon
        size={"tiny"}
      >
        <Modal.Header>Edit FAQ</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Add Question..."
                size="large"
                onChange={(e, data) => onHandleFaqChange(data, "faq")}
                value={addFaqFeilds && addFaqFeilds.faq}
                style={{ width: "100%" }}
              />
            </div>
            <div>
              <Input
                placeholder="Add Answer..."
                size="large"
                onChange={(e, data) => onHandleFaqChange(data, "answer")}
                value={addFaqFeilds && addFaqFeilds.answer}
                style={{ width: "100%" }}
              />
            </div>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpenEditModal(null)}>
            Close
          </Button>
          <Button
            content="Edit"
            labelPosition="right"
            icon="checkmark"
            onClick={() => onEditFaqSave()}
            positive
            loading={loading}
          />
        </Modal.Actions>
      </Modal>
    );
  };

  const onSaveEditBlog = async () => {
    if (openBlogModal == ADD) {
      setLoading(true);
      const payload = {
        ...addBlogFeild,
        access_token: Cookies.get(COOKIE_TOKEN),
        lang: "ch",
        image_url:
          "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/blog2.png?alt=media&token=a4791bb8-d395-4711-91d6-c4accb3c279b"
      };
      try {
        const response = await axiosInstance.post(`/addCourseBlog`, payload);
        getBlogs();
        setLoading(false);
        setOpenBLogModal(null);
      } catch (err) {
        setLoading(false);
        setOpenBLogModal(null);
      }
    } else {
      setLoading(true);
      const payload = {
        ...addBlogFeild,
        access_token: Cookies.get(COOKIE_TOKEN),
        lang: "ch",
        image_url:
          "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/blog2.png?alt=media&token=a4791bb8-d395-4711-91d6-c4accb3c279b",
        blogId: addBlogFeild.blog_id
      };
      try {
        const response = await axiosInstance.post(`/updateCourseBlog`, payload);
        getBlogs();
        setLoading(false);
        setOpenBLogModal(null);
      } catch (err) {
        setLoading(false);
        setOpenBLogModal(null);
      }
    }
  };
  const onEditBlogs = blog => {
    setAddBlogFeild({
      ...addBlogFeild,
      ...blog
    });

    setOpenBLogModal(EDIT);
  };

  const editAddBlogs = () => {
    return (
      <Modal
        onClose={() => setOpenBLogModal(null)}
        open={openBlogModal ? true : false}
        closeIcon
        size="tiny"
      >
        <Modal.Header>{`${openBlogModal} Blogs`}</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Title..."
                onChange={(e, data) => onHandleBlogChange(data, "title")}
                value={addBlogFeild && addBlogFeild.title}
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Short Description..."
                onChange={(e, data) => onHandleBlogChange(data, "short_desc")}
                value={addBlogFeild && addBlogFeild.short_desc}
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Full Description..."
                onChange={(e, data) => onHandleBlogChange(data, "full_desc")}
                value={addBlogFeild && addBlogFeild.full_desc}
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Background Color in HaxCode eg.#fff..."
                onChange={(e, data) => onHandleBlogChange(data, "bg_color")}
                value={addBlogFeild && addBlogFeild.bg_color}
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Title Color in HaxCode eg.#fff..."
                onChange={(e, data) => onHandleBlogChange(data, "title_color")}
                value={addBlogFeild && addBlogFeild.title_color}
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="Description Color in HaxCode eg.#fff..."
                onChange={(e, data) => onHandleBlogChange(data, "desc_color")}
                value={addBlogFeild && addBlogFeild.desc_color}
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="CTA Button Title"
                onChange={(e, data) => onHandleBlogChange(data, "cta_title")}
                value={addBlogFeild && addBlogFeild.cta_title}
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="CTA Background Color in HaxCode eg.#fff..."
                onChange={(e, data) => onHandleBlogChange(data, "cta_bg")}
                value={addBlogFeild && addBlogFeild.cta_bg}
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Input
                placeholder="CTA Title Color in HaxCode eg.#fff..."
                onChange={(e, data) =>
                  onHandleBlogChange(data, "cta_title_color")
                }
                value={addBlogFeild && addBlogFeild.cta_title_color}
                style={{ width: "100%" }}
              />
            </div>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpenBLogModal(null)}>
            Close
          </Button>
          <Button
            content={openBlogModal == ADD ? "ADD BLOG" : "EDIT BLOG"}
            labelPosition="right"
            icon="checkmark"
            onClick={() => onSaveEditBlog()}
            positive
            loading={loading}
          />
        </Modal.Actions>
      </Modal>
    );
  };
  const deleteBlog = async id => {
    try {
      const response = await axiosInstance.delete(
        `/deleteCourseBlog?blogId=${id}&access_token=${Cookies.get(
          COOKIE_TOKEN
        )}`
      );
      getBlogs();
    } catch (err) {}
  };

  return (
    <div className={styles.base}>
      <div className={styles.faqWrapper}>
        <div className={styles.headingBtnWrapper}>
          <div className={styles.heading}>FAQs</div>
          <div className={styles.createFaqgbtn}>
            <ButtonComponent
              label={"Create FAQs"}
              height={25}
              borderRadius={8}
              backgroundColor={"#f98e46"}
              textStyle={{
                color: "#fff",
                fontWeight: "bold",
                fontFamily: "Open Sans",
                fontSize: "12px"
              }}
              border="none"
              onClick={() => setOpenModal(true)}
            />
          </div>
        </div>
        <div className={styles.listSection}>
          {faqList.length > 0 &&
            faqList.map((faq, index) => (
              <div
                className={styles.faqStripWrapper}
                key={index}
                onClick={() => toggleSelectedOption(index)}
              >
                <div className={styles.stripIconWrapper}>
                  <div
                    className={styles.faqStrip}
                    style={{ color: selected == index ? "#218dfa" : "#333333" }}
                  >
                    <span>{index + 1}.</span>
                    <span>{faq.faq}</span>
                  </div>
                  <div className={styles.faqStrip}>
                    <Popup
                      trigger={<Icon name="ellipsis vertical" size="large" />}
                      flowing
                      hoverable
                      position="bottom right"
                      style={{ padding: "0px" }}
                    >
                      <div
                        className={styles.options}
                        onClick={() => onEditFaq(faq)}
                      >
                        Edit
                      </div>
                      <div
                        className={styles.options}
                        onClick={() => onDeleteFaq(faq.faq_id)}
                      >
                        Delete
                      </div>
                    </Popup>
                  </div>
                </div>
                {selected == index && (
                  <div className={styles.answerWrapper}>{faq.answer}</div>
                )}
              </div>
            ))}
        </div>
      </div>
      <div className={styles.reviewBlogWrapper}>
        <div className={styles.reviewWrapper}>
          <div className={styles.headingPaginationWrapper}>
            <div className={styles.heading}>Review</div>
            <div className={styles.paginationBox}>01</div>
          </div>
          {reviewList.map((i, index) => (
            <div className={styles.imageDetailsWrapper} key={index}>
              <div className={styles.imageSection}></div>
              <div className={styles.detailsWrapper}>
                <div className={styles.nameStarWrapper}>
                  <div className={styles.name}>{i.user_name}</div>
                  <div className={""}>
                    <Rating
                      icon="star"
                      defaultRating={5}
                      maxRating={i.rating}
                      size="medium"
                      disabled
                    />
                  </div>
                </div>
                <div className={styles.description}>{i.review_desc}</div>
                <div className={styles.nameStarWrapper}>
                  <div className={styles.nameStarWrapper}>
                    <List celled horizontal link>
                      <List.Item as="a">Reply</List.Item>
                      {/* <List.Item as="a">Edit</List.Item>
                      <List.Item as="a">Delete</List.Item> */}
                    </List>
                  </div>
                  <div className={styles.likeThumb}>
                    <Icon name={"thumbs up"} size="small" color={"orange"} />
                    <span className={styles.likes}>120 Likes</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.blogWrapper}>
          <div className={styles.headingPaginationWrapper}>
            <div className={styles.heading}>Blogs</div>
            <div className={styles.paginationBox}>01</div>
          </div>
          {blogsList.map((blogs, index) => (
            <div className={styles.blogDetailImageWrapper} key={index}>
              <div className={styles.blogDetails}>
                <div className={styles.blogName}>{blogs.title}</div>
                <div className={styles.blogDesc}>{blogs.short_desc}</div>
                <div className={styles.BlogOption}>
                  <List celled horizontal link>
                    <List.Item as="a" onClick={() => onEditBlogs(blogs)}>
                      Edit
                    </List.Item>
                    <List.Item as="a" onClick={() => deleteBlog(blogs.blog_id)}>
                      Delete
                    </List.Item>
                  </List>
                </div>
              </div>
              <div className={styles.blogImage}></div>
            </div>
          ))}
          <div className={styles.newUploadBtn}>
            <ButtonComponent
              label={"Upload new blog"}
              height={30}
              borderRadius={8}
              backgroundColor={"#f98e46"}
              textStyle={{
                color: "#fff",
                fontWeight: "bold",
                fontFamily: "Open Sans",
                fontSize: "12px"
              }}
              border="none"
              onClick={() => setOpenBLogModal(ADD)}
            />
          </div>
        </div>
      </div>
      {addFaqsModals()}
      {editFaqModal()}
      {editAddBlogs()}
    </div>
  );
}
