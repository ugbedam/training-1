<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Tax Management System</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
     <style>
       * {
   box-sizing: border-box;
   
 }     
   .header {
      float: left;
      width: 55%;
      padding: 10px;
      height: 110px;
      background-color: purple;
      color: #fff;
      text-align: center;
 }

  div.header:hover {
     background-color: 	#8B008B;
     border: 1px solid #111;
     color:#FFF;
 }
  
   .email {
     float: left;
     width: 15%;
     padding: 25px;
     height:110px;
     background: purple;
     color: #fff;
     font-family: Helvetica, Arial, sans-serif;
     font-size: 15px;
  }

   div.email:hover {
     background-color: 	#8B008B;
     color: #FFF;
     border: 1px solid #111;
 }

    .password {
       float: left;
       width: 15%;
       padding: 25px;
       height:110px;
       background-color: purple;
       color: #fff;
       font-family: Helvetica, Arial, sans-serif;
       font-size: 15px;
  }

     div.password:hover {
     background-color: 	#8B008B;
     color: #FFF;
     border: 1px solid #111;
 }
    .submit {
       float: left;
       width: 15%;
       padding: 25px;
       height:110px;
       background-color: purple;
       color: #fff;
  }
    #subutton {
    font-size: 14px;
    display: inline-block;
    height: 23px;
    width: 50px;
    text-align: center;
    color: #FFF;
    background: #483D8B;
    padding: 0;
    border: 2px solid #8A2BE2;
    border-radius: 3px;
    border: 1px solid #07121b;
    box-shadow: 0px 2px 0px #07121b;
    text-shadow: 1px 1px 1px #07121b;
    cursor: pointer;
  }

    
  
   #subutton:active {
     position: relative;
     top: 5px;
     box-shadow: none !important;
     transition: All 250ms ease;
}

   #email, #password, #lname, #fname, #number, #cname, #bday {
      border: 1px solid black;
      border-radius: 3px;
      height: 25px;
}
  
  input#subutton:hover {
     background-color: 	#9400D3;
     color: white;
     border: 1px solid #111;
 } 
   
   img, h1 {
     padding: 0;
     margin: 0;
}
/*===============Registration Form/Info Style sheet=============*/

   .optional, label, td {
      font-family: Helvetica, Arial, sans-serif;
      font-size: 15px;
 }
   
   p {
    font-size: 17px;
    font-style: normal;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: normal;
 }
   
   .info {
      float: left;
      width: 60%;
      padding: 10px;
      height: 430px;
 }

   .reg-form {
      float: left;
      width: 40%;
      padding: 10px;
      height: 430px;
      font-weight: normal;
      font-size: 16px;
      background: #eee;    
 }
            
  /* Use a media query to add a break point at 700px*/ 
@media(max-width:700px) {
  .info, .reg-form, .footer, .header, .email, .password, .submit {
                                     width: 100%;
                                     heigth: auto;
     }
}

   #button {
       font-size: 20px;
       display: inline-block;
       width: 150px;
       height: 48px;
       text-align: center;
       color: #FFF;
       background: #1E88E5;
       padding-left: 0;
       border: 2px solid #1976D2;
       border-radius: 3px;
       margin: 3px 5px 3px 0;
       border: 1px solid #07121b;
       box-shadow: 0px 2px 0px #07121b;
       text-shadow: 1px 1px 1px #07121b;
       cursor: pointer;
  }
     
   #button:active {
     position: relative;
     top: 5px;
     box-shadow: none !important;
     transition: All 250ms ease;
}
   
  input#button:hover {
     background-color: 	#9400D3;
     color: white;
     border: 1px solid #111;
 }
  
/*===============Footer Style sheet=============*/

     
  .footer {
      float: left;
      width: 100%;
      padding: 20px;
      text-align: center;
      background-color: #1f1f1f;
      color: white;
}

  
    </style>

    </head>
    <body>
        
         <div class="header">
          <img src="C:\Users\Damian\Desktop\taxcalculator.jpg" alt="tax_logo" style="width: 100px; height: 50px">
         <h1>Tax Management System<h1>
          
         </div>
           <div class="email">
            Email:<br>
            <input type="text" id="email" name="email" value="">
            </div>
             <div class="password">
               Password:<br>
               <input type="password" id="password" "name="password" value="">
             </div>
            <div class="submit"><br>
               <input type="submit" id="subutton" value="log In">
            </div>

          
     <div class="info">
       <h2>What Is Online Tax Management Software?<h2>
        <img src="C:/Users/Damian/Desktop/tax3.jpg" alt="exam_logo" style="width:200px;height:180px">
        <p>Online Tax Management Software allows you to sort and organize your transactions, 
          expenses and income with ease, providing you with the tools to easily identify and manage your taxes. 
          The Tax Management Software here is offered under the SaaS (Software as a Service) model, 
          meaning that the software is web based, hosted on the Cloud and can be accessed 
          when needed through a client or web browser. 
          If you&#8217re interested in online software similar to Tax Management, 
          check out our Accounting or Expenses Management Software categories.</p>
       </div>
      
     <div class="reg-form"> 
       <h1>Create An Account</h1><br>
        <form action="/dl/fvp" id="form" method="post">
         <table class="subform">
          <tbody>
           <tr>
             <td>
               <label for="fvp_email">First Name:</label>
              </td>
             <td>
                <input type="text" name="email" id="fname" value="">
             </td>
          </tr>
          <tr>
             <td>
               <label for="fvp_fname">Last Name:</label>
             </td>
             <td class="optional"><input type="text" name="fname" id="lname" value="">
             </td>
          </tr>
         <tr>
             <td>
               <label for="fvp_lname">Email Address:</label>
             </td>
            <td class="optional">
               <input type="email" name="email" id="email" value="">
            </td>
         </tr>
          <tr>
             <td>
               <label for="fvp_phone">Phone Number:</label>
             </td>
            <td class="optional">
               <input type="Number" name="num" id="number" max="11">
            </td>
         </tr>
        <tr>
             <td>
               <label for="fvp_psw">Password:</label>
             </td>
            <td class="optional">
               <input type="password" name="psw" id="password" value="">
            </td>
         </tr>
         <tr>
             <td>
               <label for="fvp_coy">Company Name:</label>
             </td>
            <td class="optional">
               <input type="text" name="coy" id="cname" value="">
            </td>
         </tr>
         <tr>
             <td>
               <label for="fvp_gd">Gender:</label>
             </td>
            <td class="optional">
               <input type="radio" name="gender" value="Male" checked>Male
            </td>
         </tr>
        <tr>
           <td class="optional">
               
           </td>
          <td class="optional">
               <input type="radio" name="gender" id="gender">Female
            </td>
        </tr>
          <tr>
             <td>
               <label for="fvp_dob">BirthDay:</label>
             </td>
            <td class="optional">
               <input type="date" name="bday" id="bday">
            </td>
            </tr>
           </tbody>
          </table>
         </form><br>
         <input type="submit" id="button" value="Register">
        </div>   
      <div class="footer">
         <p>&#169; Copyright Nigerian Tax Management Sytems. All Rights Reserved</p>
      </div>
  </body>
</html>