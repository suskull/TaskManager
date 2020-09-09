const sgMail = require('@sendgrid/mail')

//const sendgridAPI = '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';


sgMail.setApiKey(process.env.SEND_GRID_API)

const sendWelcomeEmail = (email, name) => {

    sgMail.send({
        to:email,
        from:'xoaixanh.muoii@live.com',
        subject:'This is my first creation',
        text:`Welcome to the app ${name}`
    })
}

const sendGoodbyEmail = (email, name) => {
    sgMail.send({
        to: email,
        from:'xoaixanh.muoii@live.com',
        subject:'Thank you for using the app 1',
        text: `Thank ${name} for using app, can you tell me why have you unsubscribed the app`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendGoodbyEmail
}
