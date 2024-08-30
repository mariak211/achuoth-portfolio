
// pages/api/sendMessage.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { firstname, lastname, email, phone, message } = req.body;

    
    const transporter = nodemailer.createTransport({
      service: 'Gmail', 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: email, 
      to: process.env.EMAIL_TO,
      subject: `Hi Mariak, ${firstname} ${lastname} would like to connect with you`,
      text: `You have received a new message from ${firstname} ${lastname}.\n\n
             ${message} \n
            Phone: ${phone}\n
            Email: ${email}\n`,
          };
        
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
