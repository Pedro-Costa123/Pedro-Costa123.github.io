import { useEffect, useState } from "react";

import classes from "./Contact.module.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [subjectInvalid, setSubjectInvalid] = useState(false);
  const [messageInvalid, setMessageInvalid] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isFormSubmitted) {
      if (!/\S+@\S+\.\S+/.test(email)) {
        setEmailInvalid(true);
      } else {
        setEmailInvalid(false);
      }

      if (!subject.trim()) {
        setSubjectInvalid(true);
      } else {
        setSubjectInvalid(false);
      }

      if (!message.trim()) {
        setMessageInvalid(true);
      } else {
        setMessageInvalid(false);
      }
    }
  }, [email, subject, message, isFormSubmitted]);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setIsFormSubmitted(true);

    //old version
    //window.open(`mailto:${email}?subject=${subject}&body=${message}`);

    //new version
    if (!emailInvalid && !subjectInvalid && !messageInvalid) {
      const AWS = require("aws-sdk");

      AWS.config.update({
        region: process.env.REACT_APP_AWS_REGION,
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
      });

      var params = {
        Destination: {
          ToAddresses: ["pedrocostaalves@live.com.pt"],
        },
        Message: {
          Body: {
            Text: {
              Charset: "UTF-8",
              Data: "From: " + email + "\nMessage: " + message,
            },
          },
          Subject: {
            Charset: "UTF-8",
            Data: subject,
          },
        },
        Source: "pedrocostaalves@live.com.pt",
      };

      var sendPromise = new AWS.SES({ apiVersion: "2010-12-01" })
        .sendEmail(params)
        .promise();

      sendPromise.catch((error: any) => {
        console.error(error, error.stack);
        setError(true);
      });

      if (!error) {
        alert("Message sent successfully!");
        //reset form
        setEmail("");
        setSubject("");
        setMessage("");

        //isFormSubmitted to false
        setIsFormSubmitted(false);

        //got to main page
        window.location.href = "/";
      }
    }
  };

  if (error) {
    return (
      <p className={classes.errorSendingEmail}>
        An error occurred while sending the message. Please try again later.
      </p>
    );
  }

  return (
    <>
      <h4 className={classes.contentTitle}>Contact</h4>
      <form className={classes.contactForm} onSubmit={handleSubmit} noValidate>
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
        {emailInvalid && (
          <p className={classes.error}>Please enter a valid email address</p>
        )}
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
        {subjectInvalid && (
          <p className={classes.error}>Subject cannot be empty</p>
        )}
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
        {messageInvalid && (
          <p className={classes.error}>Message cannot be empty</p>
        )}
        <input className={classes.submitButton} type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Contact;
