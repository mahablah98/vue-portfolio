const nodemailer = require('nodemailer');

exports.handler = async (event) => {
    const { name, email, subject, message } = JSON.parse(event.body);

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: 'saidmahatir98@gmail.com',
            subject: subject,
            text: message,
            html: `<p>${message}</p>`
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to send email' })
        };
    }
};
