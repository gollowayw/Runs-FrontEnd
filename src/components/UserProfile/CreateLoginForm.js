import Card from "../UI/Card";
import classes from "./CreateLoginForm.module.css";
import { useRef } from "react";

function CreateLoginForm(props) {
  const userNameInputRef = useRef();
  const aliasInputRef = useRef();
  const imageInputRef = useRef();
  const bioInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredUserName = userNameInputRef.current.value;
    const enteredAlias = aliasInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredBio = bioInputRef.current.value;

    //meeting naming convention of what is on the database. might have a better way of doing this
    const body = {
      strUserName: enteredUserName,
      strAlias: enteredAlias,
      strImageUrl: enteredImage,
      strBio: enteredBio,
    };

    props.onLoginSubmit(body);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        {/***********************TO DO*****************************************************
          Will want to add On Change here so that we can see if a user name exists already
          **********************************************************************************/}
        <div className={classes.control}>
          <label htmlFor="UserName">User Name</label>
          <input
            type="text"
            required
            id="UserName"
            placeholder="Must be unique and is used for logging into the website"
            ref={userNameInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="Alias">Alias</label>
          <input
            type="text"
            required
            id="Alias"
            placeholder="What other people will see you as"
            ref={aliasInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="Image">User Image</label>
          <input
            type="text"
            id="Image"
            placeholder="A fun pic that others will see next to your alias"
            ref={imageInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="Bio">Bio</label>
          <textarea
            type="text"
            id="Bio"
            rows="7"
            placeholder="Say something spicy about yourself or don't?"
            ref={bioInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Create Login</button>
        </div>
      </form>
    </Card>
  );
}

export default CreateLoginForm;
