import { useRef, useState } from "react";

import classes from "./Contact.module.css";

const CONTACT_EMAIL = "pedrocostaalves@live.com.pt";

/** Presents direct contact channels and preserves the existing message form. */
const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [formValidation, setFormValidation] = useState({
    email: false,
    subject: false,
    message: false,
  });
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const emailInput = useRef<HTMLInputElement>(null);
  const subjectInput = useRef<HTMLInputElement>(null);
  const messageInput = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextValidation = {
      email: !/\S+@\S+\.\S+/.test(email),
      subject: !subject.trim(),
      message: !message.trim(),
    };

    setFormValidation(nextValidation);
    setError(false);
    setSuccess(false);

    if (nextValidation.email) {
      emailInput.current?.focus();
      return;
    }

    if (nextValidation.subject) {
      subjectInput.current?.focus();
      return;
    }

    if (nextValidation.message) {
      messageInput.current?.focus();
      return;
    }

    setIsSending(true);

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

      if (!response.ok) {
        throw new Error("Message request failed");
      }

      setEmail("");
      setSubject("");
      setMessage("");
      setSuccess(true);
    } catch {
      setError(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className={classes.contact} aria-labelledby="contact-heading">
      <h1 className={classes.contentTitle} id="contact-heading">
        Contact
      </h1>
      <p className={classes.sectionIntro}>
        For software engineering roles or focused collaboration, email is the
        most direct route.
      </p>

      <div className={classes.contactPanel}>
        <aside className={classes.directContact} aria-labelledby="direct-heading">
          <h2 className={classes.sectionTitle} id="direct-heading">
            Direct contact
          </h2>
          <p className={classes.directIntro}>
            Choose the channel that best fits the conversation.
          </p>
          <ul className={classes.contactLinks}>
            <li>
              <a className={classes.contactLink} href={`mailto:${CONTACT_EMAIL}`}>
                <span className={classes.linkLabel}>Email</span>
                <span className={classes.linkValue}>{CONTACT_EMAIL}</span>
              </a>
            </li>
            <li>
              <a
                className={classes.contactLink}
                href="https://www.linkedin.com/in/pedro-m-da-costa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pedro Costa on LinkedIn (opens in a new tab)"
              >
                <span className={classes.linkLabel}>LinkedIn</span>
                <span className={classes.linkValue}>Professional profile</span>
              </a>
            </li>
            <li>
              <a
                className={classes.contactLink}
                href="https://github.com/Pedro-Costa123"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pedro Costa on GitHub (opens in a new tab)"
              >
                <span className={classes.linkLabel}>GitHub</span>
                <span className={classes.linkValue}>Code and projects</span>
              </a>
            </li>
          </ul>
        </aside>

        <div className={classes.formSection}>
          <header className={classes.formHeader}>
            <h2 className={classes.sectionTitle}>Send a message</h2>
            <p>The form sends your message directly to my inbox.</p>
          </header>

          {error && (
            <p className={classes.errorSendingEmail} role="alert">
              The message could not be sent. Please use email or try again later.
            </p>
          )}

          {success && (
            <p className={classes.successSendingEmail} role="status">
              Your message has been sent. Thank you for getting in touch.
            </p>
          )}

          <form className={classes.contactForm} onSubmit={handleSubmit} noValidate>
            <div className={classes.fieldGroup}>
              <label className={classes.label} htmlFor="email">
                Your email
              </label>
              <input
                className={classes.input}
                type="email"
                id="email"
                name="email"
                value={email}
                ref={emailInput}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                placeholder="you@example.com"
                required
                aria-invalid={formValidation.email}
                aria-describedby={
                  formValidation.email ? "email-error" : undefined
                }
              />
              {formValidation.email && (
                <p className={classes.error} id="email-error">
                  Please enter a valid email address.
                </p>
              )}
            </div>
            <div className={classes.fieldGroup}>
              <label className={classes.label} htmlFor="subject">
                Subject
              </label>
              <input
                className={classes.input}
                type="text"
                id="subject"
                name="subject"
                value={subject}
                ref={subjectInput}
                onChange={(event) => setSubject(event.target.value)}
                placeholder="Role or project context"
                required
                aria-invalid={formValidation.subject}
                aria-describedby={
                  formValidation.subject ? "subject-error" : undefined
                }
              />
              {formValidation.subject && (
                <p className={classes.error} id="subject-error">
                  Please add a subject.
                </p>
              )}
            </div>
            <div className={classes.fieldGroup}>
              <label className={classes.label} htmlFor="message">
                Message
              </label>
              <textarea
                className={classes.input}
                id="message"
                name="message"
                value={message}
                ref={messageInput}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Share the relevant details."
                rows={5}
                required
                aria-invalid={formValidation.message}
                aria-describedby={
                  formValidation.message ? "message-error" : undefined
                }
              />
              {formValidation.message && (
                <p className={classes.error} id="message-error">
                  Please add a message.
                </p>
              )}
            </div>
            <button
              className={classes.submitButton}
              type="submit"
              disabled={isSending}
            >
              {isSending ? "Sending…" : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
