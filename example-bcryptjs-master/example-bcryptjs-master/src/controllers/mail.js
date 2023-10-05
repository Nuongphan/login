const MailJet = require("node-mailjet")
const  SendForgotPassword = async (user, codeResetPassword) => {
    const mailjet = MailJet.apiConnect(
        process.env.MJ_APIKEY_PUBLIC,
        process.env.MJ_APIKEY_PRIVATE,
    );

    const request = await mailjet
        .post('send', { version: 'v3.1' })
        .request({
            Messages: [
                {
                    From: {
                        Email: "nuongnunga8@gmail.com",
                        Name: "Nuong"
                    },
                    To: [
                        {
                            Email: `${user.dataValues.email}`,
                            Name: `${user.userName}`
                        }
                    ],
                    Subject: "reset password",
                    HTMLPart: `<h3>Dear ${user.userName}, code to reset password ${codeResetPassword} >ResetPassword</a>!</h3><br />May the delivery force be with you!`
                }
            ]
        })
    return request;
}
module.exports =SendForgotPassword