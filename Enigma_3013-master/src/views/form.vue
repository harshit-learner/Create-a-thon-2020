<template>
<div class="container">
<form>  
  <div class="container-1">  
  <center>  <h1> Enigma-Hunter Registeration Form</h1> </center>  
  <hr>  
      <h2>A. Personal Details:</h2>
  <label> Firstname </label>   
<input type="text" name="firstname" placeholder= "Firstname" size="15" required />   
   
<label> Lastname: </label>    
<input type="text" name="lastname" placeholder="Lastname" size="15" required />   
<div>  
<label>   
Highest Qualification: 
</label>   
  
<select>  
<option value="Qualification">Qualification</option>  
<option value="BCA">BCA</option>  
<option value="BBA">BBA</option>  
<option value="B.Tech">B.Tech</option>  
<option value="MBA">MBA</option>  
<option value="MCA">MCA</option>  
<option value="M.Tech">M.Tech</option>
<option value = "Other">Other</option>
</select>  
</div>  
<div>  
<label>   
Gender :  
</label><br>  
<input type="radio" value="Male" name="gender" checked > Male   
<input type="radio" value="Female" name="gender"> Female   
<input type="radio" value="Other" name="gender"> Prefer Not to say
</div>  
<label>   
Phone (Preferably WhatsApp Number):  
</label>  
<input type="text" name="country code" placeholder="Country Code"  value="+91" size="2"/> 
      
<label>   
Marital Status : 
</label><br>  
<input type="radio" value="Married" name="gender"  > Married  
<input type="radio" value="Unmarried" name="gender" checked> Unmarried  
<br>
<br>
Current Address :  
<textarea cols="80" rows="4" placeholder="Current Address" value="address" required>  
</textarea>  
 <label for="email">Email:</label>  
 <input type="text" placeholder="Enter Email" name="email" required>  
    <hr> 
    <h2>B. Professional Details:</h2>
    <label for="Skills">Skills(on a scale of 5):</label>  
 <input type="text" placeholder="Enter skills: level(Ex: C++: 5)" name="skills" required> 
    Work History:
    <textarea cols="80" rows="4" placeholder="Organization : tenure (Ex: ABC: 2 years)" value="work" required>  
</textarea>
    <label for="edu">Education:</label>
    <input type = "text" placeholder="Enter education details" name = "eduaction" required>
    <label for="linkgit">Github Profile Link:</label>  
 <input type="text" placeholder="Gihtub link" name="github">
    <label for="links">Linkedin Profile Link:</label>  
 <input type="text" placeholder="LinkedIn link" name="linkedIn">
    <label for="experience">Total Years of Experience:</label>  
 <input type="text" placeholder="Enter years of experience" name="experience" required> 
    <hr> 
    <h2>C. Desired Job Details:</h2>
      <label>   
Industry Type: 
</label>   
  
<select>    
<option value="finance">Finance</option>  
<option value="Insurance">Insurance</option>  
<option value="Healthcare">Healthcare</option>  
<option value="Education">Education</option>  
<option value="IT">IT</option>  
<option value="Automation">Automation</option>
<option value = "Other">Other</option>
</select> 
      <br><br>
      <label for="role">Role:</label>  
 <input type="text" placeholder="Enter role" name="role" required>
      <br><br>
      <label>   
Job Type :  
</label><br>  
<input type="radio" value="Permanent" name="Job Type" checked > Permanent   
<input type="radio" value="Internship" name="gender"> Internship   
<input type="radio" value="Other" name="other"> Other
      <br><br>
      Please give the quiz acc to your skill : 
      <br><a href="https://docs.google.com/forms/d/e/1FAIpQLSeAFTkHkqMSkW0ezXamDW3MMoswRv4zx5tnbA7ydZbeFfRSTQ/viewform?usp=sf_link"> <button class="btn btn-primary">HTML/CSS </button></a>
      <br><br> Enter your score in quiz : <input type="number"/>
      <br><br><label for="salary">Expected Salary:</label>  
 <input type="text" placeholder="Enter Expected Salary" name="salary" required>  
</div> 
    <button  class="btn btn-success">Create Profile </button> 
</form>  

</div>
</template>

<style>  
body{  
  font-family: Calibri, Helvetica, sans-serif;
}  
.container-1 {  
    padding: 50px;  
  background-color: rgb(212, 231, 238);  
} 
    .container1 {  
    padding: 10px;  
  background-color: rgb(240, 220, 220);  
}  
  
  
input[type=text], input[type=password], textarea {  
  width: 100%;  
  padding: 15px;  
  margin: 5px 0 22px 0;  
  display: inline-block;  
  border: none; 
}  
input[type=text]:focus, input[type=password]:focus { 
  outline: none;  
}  
 div {  
            padding: 10px 0;  
         }  
hr {  
  border: 1px solid #f1f1f1;  
  margin-bottom: 25px;  
}  
.registerbtn {  
  background-color: #4CAF50;  
  color: white;  
  padding: 16px 20px;  
  margin: 8px 0;  
  border: none;  
  cursor: pointer;  
  width: 100%;  
  opacity: 0.9;  
}  
.registerbtn:hover {  
  opacity: 1;  
}  
</style>  
