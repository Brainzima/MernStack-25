require("dotenv").config();
const express = require('express');
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Nodemailer Server setup." });
})

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true, // Use true for port 465, false for port 587
    auth: {
        user: process.env.TEST_EMAIL,
        pass: process.env.TEST_EMAIL_PASS,
    },
});

const sendEmail = async () => {
    const info = await transporter.sendMail({
        from: '"Test App" <testonly@rexvel.com>',
        to: "ajitk23192@gmail.com",
        subject: "Testing Nodemailer",
        // text: "Hello world, This the test nodemailer email.", 
        html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Email Template</title>
<style type="text/css">
body { margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, sans-serif; }
table { border-collapse: collapse; }
.container { width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; }
.header { background-color: #345C72; color: #ffffff; text-align: center; padding: 20px; }
.body { padding: 20px; font-size: 16px; line-height: 1.6; color: #555555; }
.footer { background-color: #333333; color: #999999; text-align: center; padding: 20px; }
.cta { background-color: #345C72; padding: 10px 20px; border-radius: 5px; color: #ffffff; text-decoration: none; font-weight: bold; display: inline-block; }
@media screen and (max-width: 600px) {
.container { width: 100% !important; padding: 10px !important; }
}
</style>
</head>
<body>
<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center">
<table class="container" width="600" cellpadding="0" cellspacing="0">
<!-- Header -->
<tr>
<td class="header">
<h1>Subject Here</h1>
</td>
</tr>
<!-- Body -->
<tr>
<td class="body">
<p>Dear [Name],</p>
<p>Your main message goes here. Keep it short and clear.</p>
<ul>
<li>Point one.</li>
<li>Point two.</li>
</ul>
<a href="[Link URL]" class="cta">Call to Action</a>
</td>
</tr>
<!-- Footer -->
<tr>
<td class="footer">
<p>[Your Name] | [Contact] | [Unsubscribe]</p>
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>
`,
    });

    console.log("Message sent:", info.messageId);
}

app.get('/send', async (req, res) => {
    try {
        if (sendEmail()) {
            res.json({ message: "Mail Sent!" });
        }
    } catch (error) {
        res.json({ message: error.message });
    }
})

app.listen(process.env.PORT, () => {
    console.log("Server is ready.");
})