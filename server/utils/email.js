import nodemailer from 'nodemailer';

class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.from = `Natours <${process.env.EMAIL_FROM}>`;
    this.url = url;
  }

  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      return nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD,
        },
      });
    }

    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async send(html, subject) {
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: '',
    };

    //create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send(
      `<h3>Welcome to Natours, ${this.firstName}<h3>
        <p>we are glad to have you on board</p>
      `,
      'Welcome to the Natours Family!'
    );
  }

  async sendPasswordReset() {
    await this.send(
      `<h3>This is a link to reset your password</h3>
      ${this.url}
      `,
      'Your password reset token (valid for only 10 minutes)'
    );
  }
}

export default Email;
