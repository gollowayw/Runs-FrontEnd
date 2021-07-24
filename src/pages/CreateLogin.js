import CreateLoginForm from "../components/User_Components/UserProfile/CreateLoginForm";
import { useHistory } from "react-router-dom";

function CreateLogin(props) {
  const history = useHistory();

  function CreateLoginHandler(body) {
    console.log("begin create user");
    console.log(process.env);

    fetch(
      process.env.REACT_APP_API_URL + "/CreateLogin",

      {
        method: "POST",
        body: JSON.stringify(body),
        header: {
          "Access-Control-Allow-Origin": "*", // Required for CORS support to work
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      console.log("end create user");
      history.replace("/AllUsers");
    });
  }

  return (
    <section>
      <h1>Add New User</h1>
      <CreateLoginForm onLoginSubmit={CreateLoginHandler} />
    </section>
  );
}

export default CreateLogin;
