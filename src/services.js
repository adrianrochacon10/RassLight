import nodemailer from 'nodemailer';

export const enviarEmail = async (destinatario, asunto, contenido) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'adrianrochacon@gmail.com',
      pass: 'nddt qthh mdfq jzdh'
    }
  });
  
  const mailOptions = {
    from: 'RassLigth <adrianrochacon@gmail.com>',
    to: destinatario,
    subject: asunto,
    text: contenido
  };

  const info = await transporter.sendMail(mailOptions);
  console.log('Correo electrónico enviado correctamente:', info.response);
};
