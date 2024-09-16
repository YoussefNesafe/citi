import {  ProjectsContactUsFormRequestProps } from "@/models/IDictionary/FormsRequests";

export const ProjectsContactUsEmailTemplate = ({fullName,email, phone,contactMode,country,bedrooms,budget} : ProjectsContactUsFormRequestProps) => `

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
      <div class="title">Number of bedrooms:</div>
      <p class="p">${bedrooms}</p>
    </div>
    <div class="wrapper">
      <div class="title">Budget:</div>
      <p class="p">${Number(budget).toLocaleString()} AED</p>
    </div>
    <div class="wrapper">
      <div class="title">Country:</div>
      <p class="p">${country}</p>
    </div>
  </div>
</body>
</html>


`