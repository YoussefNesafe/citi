import nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

const senderEmail = process.env.SENDER_EMAIL;
const password = process.env.EMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
  user: senderEmail,
  pass: password
 }
} as SMTPTransport.Options)



export const mailOptions = {
  from: senderEmail,
  cc: process.env.CC_SARAH_EMAIL
} as {from: string; cc: string} 