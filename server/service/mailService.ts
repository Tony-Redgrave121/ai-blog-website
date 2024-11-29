import nodemailer from 'nodemailer'
import SMTPTransport from "nodemailer/lib/smtp-transport"

class MailService {
    transporter: nodemailer.Transporter

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_APP_PASSWORD
            }
        } as SMTPTransport.Options)
    }

    async sendMail(to: string, link: string) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: "Confirm your email for site " + process.env.API_URL,
            text: "",
            html:
                `
                    <div>
                        <h1>For activation click on the link</h1>
                        <a href=${link}>${link}</a>
                    </div>
                `
        })
    }
}

export default new MailService()