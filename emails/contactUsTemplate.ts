import { ContactUsFormRequestProps } from "@/models/IDictionary/FormsRequests";

export const ContactUsEmailTemplate = ({fullName,email, phone,contactMode,country,message} : ContactUsFormRequestProps) => `

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .container {
      width: 90%;
      margin: auto;
    }

    .wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .h1 {
      font-size: 1.225rem;
      margin-right: 1rem;
      color: #B18F5D;
    }

    .p {
      font-size: 1rem;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="wrapper">
      <h1 class="h1">Name:</h1>
      <p class="p">${fullName}</p>
    </div>
    <div class="wrapper">
      <h1 class="h1">Email:</h1>
      <p class="p">${email}</p>
    </div>
    <div class="wrapper">
      <h1 class="h1">phone:</h1>
      <p class="p">${phone}</p>
    </div>
    <div class="wrapper">
      <h1 class="h1">Prefered Contact Mode:</h1>
      <p class="p">${contactMode}</p>
    </div>
    <div class="wrapper">
      <h1 class="h1">Country:</h1>
      <p class="p">${country}</p>
    </div>
    <h1 class="h1">Message:</h1>
    <p class="p">${message}</p>
  </div>
</body>
</html>


`