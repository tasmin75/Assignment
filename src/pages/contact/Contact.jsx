import React from "react";
import style from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={style.container}>
      <h1>Feedback Form</h1>
      <form>
        <input type="text" name="firstname" placeholder="Enter name here" />
        <input type="text" name="secondname" placeholder="Enter surname here" />
        Comment :<br />
        <textarea rows="6" cols="50" name="commentfield" />
        <div className={style.btn}>
        <input type="submit" value="Send Feedback" />
        <input type="reset" value="Reset" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
