import { createTransport } from 'nodemailer';

//node-> 
// Create a transporter object using the SMTP transport
const transporter = createTransport({
  service: 'gmail', // Use 'gmail' or another email service
  host:"smtp.gmail.com",
  port:587,
  secure:false,
  auth: {
    user: 'sender@gmail.com', // Your email address
    pass: 'app_password_16_digit',  // Your app password(create using app password option in your google account)
  },
});

// Set up email data
const mailOptions = {
  from: 'sender@gmail.com',    // Sender address
  to: 'receiver@gmail.com', // List of recipients
  subject: 'subject of mail',     // Subject line
  text: 'plain text',              // Plain text body
  html: "<p>email body</p>",       // HTML body
};


const sendMail=async(transporter,mailOptions)=>{
    try{
        await transporter.sendMail(mailOptions);
        console.log("email has been send!");
    }catch(err){
        console.log(err)
    }
}

setTimeout(()=>{
    sendMail(transporter,mailOptions);
},5000);
