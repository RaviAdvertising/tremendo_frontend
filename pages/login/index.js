import Button from "../../components/Button/Button";

export default function Login(props) {
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
        Click Here
      </Button>
    </div>
  );
}
