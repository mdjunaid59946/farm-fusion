const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // Correct service provider (Gmail in this case)
  auth: {
    user: 'rmmjsm@gmail.com', // Replace with your email
    pass: 'farmfusion@4', // Replace with your app password (not your regular email password)
  },
});

// POST route to send emails
app.post('/send-mail', (req, res) => {
  const { name, email, query } = req.body;

  const mailOptions = {
    from: 'rmmjsm@gmail.com', // Replace with your email
    to: 'shaswatmishra5533@gmail.com', // Replace with the email to receive queries
    replyTo: email,
    subject: `New Query from ${name}`,
    text: `You have received a new query:\n\nName: ${name}\nEmail: ${email}\nQuery: ${query}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
