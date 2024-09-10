import { ContactUsFormRequestProps } from "@/models/IDictionary/FormsRequests";

export const ContactUsEmailTemplate = ({fullName,email, phone,contactMode,country,message,userOrAgent} : ContactUsFormRequestProps) => `

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .container {
      width: 100%;
    }
      .wrapper {
      display:flex;
      align-items: center;
      margin: 0;
      }
    .title {
      font-size: 1rem;
      font-weight: bold;
      color: #B18F5D;
      margin-right:0.5rem;
    }

    .p {
      font-size: 0.875;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="wrapper">
      <div class="title">Name:</div>
      <p class="p">${fullName}</p>
    </div>
    <div class="wrapper">
      <div class="title">Email:</div>
      <p class="p">${email}</p>
    </div>
    <div class="wrapper">
      <div class="title">phone:</div>
      <p class="p">${phone}</p>
    </div>
    <div class="wrapper">
      <div class="title">Prefered Contact Mode:</div>
      <p class="p">${contactMode}</p>
    </div>
    <div class="wrapper">
      <div class="title">Client:</div>
      <p class="p">${userOrAgent === 'client' ? 'Individual client' : 'Agent'}</p>
    </div>
    <div class="wrapper">
      <div class="title">Country:</div>
      <p class="p">${country}</p>
    </div>
    <div class="title">Message:</div>
    <p class="p">${message}</p>
  </div>
</body>
</html>


`