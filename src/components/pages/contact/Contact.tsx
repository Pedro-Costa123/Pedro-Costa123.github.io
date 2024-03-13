import { useEffect, useState } from "react";

import classes from "./Contact.module.css";

/**
 * Contact Component
 *
 * This component renders a contact form and handles form submission.
 * It uses the useState and useEffect hooks from React, and CSS modules for styling.
 *
 * The component maintains several state variables: 'email', 'subject', 'message', 'formValidation', 'isFormSubmitted', and 'error'.
 * 'email', 'subject', and 'message' are the form inputs.
 * 'formValidation' is an object indicating whether each form input is valid.
 * 'isFormSubmitted' is a boolean indicating whether the form has been submitted.
 * 'error' is a boolean indicating whether an error occurred while sending the email.
 *
 * The component includes a useEffect hook that sends an email when the form is submitted and all form inputs are valid.
 * The email is sent by making a POST request to an AWS Lambda function.
 * If the request is successful, an alert is displayed and the page is refreshed.
 * If the request fails, 'error' is set to true.
 *
 * The component includes a handleSubmit function that validates the form inputs and sets 'isFormSubmitted' to true.
 * The function is attached to the 'onSubmit' event of the form.
 *
 * The component conditionally renders different content based on the state.
 * If 'error' is true, it renders a message indicating that an error occurred.
 * Otherwise, it renders the form.
 * The form includes input fields for 'email', 'subject', and 'message', and a submit button.
 * Each input field includes an 'onChange' event handler that updates the corresponding state variable.
 * If a form input is invalid when the form is submitted, an error message is displayed.
 *
 */
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
        try {
          const response = await fetch(
            "https://ec0atsa0ic.execute-api.eu-west-3.amazonaws.com/default/SendAutoEmail",
            {
              mode: "cors",
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email, subject, message }),
            }
          );

          if (response.ok) {
            window.alert("Email sent successfully");
            window.location.href = "";
          } else {
            setError(true);
          }
        } catch (error) {
          setError(true);
        }
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
