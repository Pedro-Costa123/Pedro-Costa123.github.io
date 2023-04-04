import { useState } from "react";

import classes from "./Contact.module.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    window.open(`mailto:${email}?subject=${subject}&body=${message}`);
    //after replace by formspree -> https://formspree.io/

    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <>
      <h4 className={classes.contentTitle}>Contact</h4>
      <form className={classes.contactForm} onSubmit={handleSubmit}>
        <label className={classes.label} htmlFor="email">
          Email:
        </label>
        <input
          className={classes.input}
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <label className={classes.label} htmlFor="subject">
          Subject:
        </label>
        <input
          className={classes.input}
          type="text"
          id="subject"
          name="subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          required
        />
        <label className={classes.label} htmlFor="message">
          Message:
        </label>
        <textarea
          className={classes.input}
          id="message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        ></textarea>
        <input className={classes.submitButton} type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Contact;
