import Button from "../../components/Button/Button";

export default function AboutUs(props) {
  return (
    <div>
      <Button
        url="/signup"
        btnStyle={{
          fontSize: "20px",
          backgroundColor: "#000",
          color: "#fff",
          padding: "10px 20px"
        }}
      >
        about us
      </Button>
    </div>
  );
}
