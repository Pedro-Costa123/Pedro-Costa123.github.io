import { useEffect, useState } from "react";

import classes from "./Contact.module.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [formValidation, setFormValidation] = useState({
    email: false,
    subject: false,
    message: false,
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const sendEmail = async () => {
      if (
        !formValidation.email &&
        !formValidation.subject &&
        !formValidation.message &&
        isFormSubmitted
      ) {
        //old way of sending email
        window.open(
          `mailto:pedrocostaalves@live.com.pt?subject=${subject}&body=From: ${email}%0D%0AMessage: ${message}`
        );
        setError(false);

        //new way of sending email
        // try {
        //   const response = await fetch(
        //     "URL",
        //     {
        //       mode: "cors",
        //       method: "POST",
        //       headers: {
        //         "Content-Type": "application/json",
        //       },
        //       body: JSON.stringify({ email, subject, message }),
        //     }
        //   );

        //   if (response.ok) {
        //     console.log("Email sent successfully");
        //     window.location.href = "";
        //   } else {
        //     setError(true);
        //   }
        // } catch (error) {
        //   setError(true);
        // }
      }
    };

    if (isFormSubmitted) {
      sendEmail();
    }
  }, [email, subject, message, isFormSubmitted, formValidation]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormValidation({
      email: !/\S+@\S+\.\S+/.test(email),
      subject: !subject.trim(),
      message: !message.trim(),
    });
    setIsFormSubmitted(true);
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
        {formValidation.email && (
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
        {formValidation.subject && (
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
        {formValidation.message && (
          <p className={classes.error}>Message cannot be empty</p>
        )}
        <input className={classes.submitButton} type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Contact;
