// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Nodemailer Configuration
// const transporter = nodemailer.createTransport({
//   service: 'Gmail', // Use Gmail or other email services
//   auth: {
//     user: 'your-email@gmail.com', // Replace with the owner's email
//     pass: 'your-email-password', // Replace with the email's app password
//   },
// });

// // Endpoint to send email
// app.post('/send-email', (req, res) => {
//   const { name, email, query } = req.body;

//   const mailOptions = {
//     from: email,
//     to: 'owner-email@gmail.com', // Replace with the owner's email
//     subject: `Query from ${name}`,
//     text: `Name: ${name}\nEmail: ${email}\n\nQuery:\n${query}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error(error);
//       return res.status(500).json({ success: false, message: 'Failed to send email' });
//     }
//     res.status(200).json({ success: true, message: 'Email sent successfully!' });
//   });
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
