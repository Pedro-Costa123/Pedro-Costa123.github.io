const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  try {
    const { httpMethod, headers } = event;

    // Handle OPTIONS request separately
    if (httpMethod === "OPTIONS") {
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin":
            "http://localhost:3000, https://pedro-costa123.github.io",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "OPTIONS, POST",
        },
        body: JSON.stringify({ message: "Preflight request successful" }),
      };
    }

    // Handle POST request
    if (httpMethod === "POST") {
      const { email, subject, message } = JSON.parse(event.body);

      // Create nodemailer transporter
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // Define email options
      const mailOptions = {
        from: "pedrocostaalves@live.com.pt",
        to: "pedrocostaalves@live.com.pt",
        subject: subject,
        text: `From: ${email}\n\nMessage: ${message}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin":
            "http://localhost:3000, https://pedro-costa123.github.io",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "OPTIONS, POST",
        },
        body: JSON.stringify({ message: "Email sent successfully" }),
      };
    }

    // If the request method is neither OPTIONS nor POST, return a 405 Method Not Allowed response
    return {
      statusCode: 405,
      headers: {
        "Access-Control-Allow-Origin":
          "http://localhost:3000, https://pedro-costa123.github.io",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS, POST",
      },
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin":
          "http://localhost:3000, https://pedro-costa123.github.io",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS, POST",
      },
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};
