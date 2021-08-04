const nodemailer = require('nodemailer');


const sendMail = options => {
    const transport = nodemailer.createTransport({
        name: 'Gmail',
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSOWORD
        }
    })

    const mailOptions = {
        from: 'himel <himel23@gmail.com>',
        to: options.email,
        subject: options.subject,
        text: options.message
    }

    transport.sendMail(mailOptions)
}

module.exports = sendMail;