import { sendEmail } from "./email.js";

const RECIPIENTS = [
  "learnifyofficial8@gmail.com",
  "therealpunit5@gmail.com",
  "temper56000@gmail.com",
];

sendEmail(RECIPIENTS, 
    "Testing Email", 
    "Did you received the email", 
    "<p>This is a test email sent with <b>Nodemailer</b> using OAuth2.</p>"
);