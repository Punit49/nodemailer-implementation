import nodemailer from "nodemailer";
import "dotenv/config";

const transporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER,
        refreshToken: process.env.REFRESH_TOKEN,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    }
});

transporter.verify((error, success) => {
    if(error){
        console.error('Error connecting to email server:', error);
    } else {
        console.log('Email server is ready to send messages');
    }
});

const sendEmail = async (to, subject, text, html) => {
    try {
        const info = await transporter.sendMail({
            from: `${process.env.EMAIL_USER}`,
            to, 
            subject, 
            text, 
            html
        });

        console.log("Message Sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    } catch (error) {
        console.log('Error sending email: ', error);
    }
}

export {
    transporter, sendEmail
}