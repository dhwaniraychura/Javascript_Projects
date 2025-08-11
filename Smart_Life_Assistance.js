alert(`Smart Life Assistant
1.🏃‍♂️ Fitness Suggestion System
2.💸 Monthly Budget Planner
3.📱 Mobile Data Usage Alert System
4.🔐 Change Password Logic`);
let choice = parseInt(prompt("Enter Your Choice :"));
if(isNaN(choice)){
    alert("Please Check you input and Try again!!");
}
else if(choice === 1){
let age = parseInt(prompt("Enter Your Age :"));
let weight = parseFloat(prompt("Enter Your Weight :"));
if(isNaN(age)|| isNaN(weight)){
    alert("You have not entered age or weight in your Input please check!");
}
else if(age > 0 && age <= 1){
    if(weight >= 9 && weight <= 11){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Normal Weight...`);
    }
    else if(weight > 11 && weight <= 13){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Overweight...`);
    }
    else if(weight > 13){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Obese...`);
    }
    else{
        alert(`Your age : ${age} \n Your weight : ${weight}\n Underweight...`);
    }
}
else if(age >= 2 && age <= 3){
    if(weight >= 12 && weight <= 16){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Normal Weight...`);
    }
    else if(weight > 16 && weight <= 18){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Overweight...`);
    }
    else if(weight > 18 ){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Obese...`);
    }
    else{
        alert(`Your age : ${age} \n Your weight : ${weight}\n Underweight...`);
    }
}
else if(age >= 4 && age <= 5){
     if(weight >= 14 && weight <= 20){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Normal Weight...`);
    }
    else if(weight > 20 && weight <= 22){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Overweight...`);
    }
    else if(weight > 22){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Obese...`);
    }
    else{
        alert(`Your age : ${age} \n Your weight : ${weight}\n Underweight...`);
    }
}
else if(age >= 6 && age <= 9){
     if(weight >= 20 && weight <= 32){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Normal Weight...`);
    }
    else if(weight > 32 && weight <= 35){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Overweight...`);
    }
    else if(weight > 35){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Obese...`);
    }
    else{
        alert(`Your age : ${age} \n Your weight : ${weight}\n Underweight...`);
    }
}
else if(age >= 10 && age <= 12){
     if(weight >= 30  && weight <= 45 ){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Normal Weight...`);
    }
    else if(weight > 45 && weight <= 50){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Overweight...`);
    }
    else if(weight > 50){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Obese...`);
    }
    else{
        alert(`Your age : ${age} \n Your weight : ${weight}\n Underweight...`);
    }
}
else if(age >= 13 && age <= 17){
     if(weight >= 45  && weight <= 65){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Normal Weight...`);
    }
    else if(weight > 65 && weight <= 75){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Overweight...`);
    }
    else if(weight > 75){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Obese...`);
    }
    else{
        alert(`Your age : ${age} \n Your weight : ${weight}\n Underweight...`);
    }
}
else if(age >= 18 && age <= 25){
     if(weight >= 50  && weight <= 75){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Normal Weight...`);
    }
    else if(weight > 75 && weight <= 85){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Overweight...`);
    }
    else if(weight > 85){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Obese...`);
    }
    else{
        alert(`Your age : ${age} \n Your weight : ${weight}\n Underweight...`);
    }
}
else if(age >= 26 && age <= 45){
     if(weight >= 55  && weight <= 72){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Normal Weight...`);
    }
    else if(weight > 72 && weight <= 85){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Overweight...`);
    }
    else if(weight > 85){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Obese...`);
    }
    else{
        alert(`Your age : ${age} \n Your weight : ${weight}\n Underweight...`);
    }
}
else if(age >= 46 && age <= 60){
     if(weight >= 56  && weight <= 73){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Normal Weight...`);
    }
    else if(weight > 73 && weight <= 86){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Overweight...`);
    }
    else if(weight > 86){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Obese...`);
    }
    else{
        alert(`Your age : ${age} \n Your weight : ${weight}\n Underweight...`);
    }
}
else if(age >= 60){
     if(weight >= 54  && weight <= 70){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Normal Weight...`);
    }
    else if(weight > 71 && weight <= 80){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Overweight...`);
    }
    else if(weight > 80){
        alert(`Your age : ${age} \n Your weight : ${weight}\n Obese...`);
    }
    else{
        alert(`Your age : ${age} \n Your weight : ${weight}\n Underweight...`);
    }
}
else{
    alert("Invalid Age!!!");
}
}
else if(choice === 2){
let income = parseFloat(prompt("Enter Your Monthly income :"));
if(isNaN(income)){
    alert("You have not entered income please check!");
}
else if(income >= 1000 && income <= 10000){
    alert("Keep your spending in check and save whenever you can.");
}
else if(income > 10000 && income <= 30000){
   alert("Great going! Build a habit of saving monthly—it adds up fast.");
}
else if(income > 30000){
    alert("You're earning well! It's the perfect time to start long-term investments.");
}
else{
    alert("Oops! Income must be 1000 or higher. Please check your input.");
}
}
else if(choice == 3){
 let data = parseFloat(prompt("Enter Your Mobile data used in a month (GB) : "));
let Maxlimit = 20.0;
if(data < 0 || isNaN(data)) {
   alert("Data entry error! Try again with a valid number.");
}
 else if(data === 0){
   alert("Awesome! You haven't used any mobile data this month.");
}
else if(data >= Maxlimit) {
    alert(`You have exceeded the maximum limit of ${Maxlimit} GB! Data services may be stopped.`);
}
else if(data > 0 && data <= 5.0){
  alert("Normal usage! You're managing your data well.");
}
else if( data > 5.0 && data <= 15.0){
    alert("Heavy usage, consider a bigger plan");
}
else{
    alert("Extreme usage! Upgrade your plan to avoid high charges.");
}
}
else if(choice == 4){
let Setpassword = "Dhwani@18";
let Oldpassword = prompt("Enter Your Old password :");
let Newpassword = prompt("Enter Your New password :");
let Confirmpassword = prompt("Enter Confirm password :");
if(!Oldpassword || !Newpassword || !Confirmpassword) {
    alert("You have not entered Oldpassword Newpassword or Confirmpassword please check!");
}
else{
    if (Setpassword === Oldpassword) {
    if (Newpassword === Confirmpassword) {
        if (Newpassword != Setpassword) {
            if (Newpassword.length >= 8) {
                if (/[A-Z]/.test(Newpassword) && /[!@#$%^&*(),.?":{}|<>]/.test(Newpassword) && /[0-9]/.test(Newpassword)) {
                    Setpassword = Newpassword;
                    alert("Your New Password has been set sucessfully!!");
                    alert(`Your new password is : ${Setpassword}`);
                }
                else{
                    alert("New Password must contain one character Capital and one special character and one digit...")
                }
            }
            else {
                alert("New Password must contain 8 characters or more!!!");
            }
        }
        else {
            alert("Newpassword and Old password must be different!!!");
        }
    }
    else {
        alert("Newpassword and Confirm password must be same!!!");
    }
}
else {
    alert("Your Old password is not matched!!!");
}
}
}
else{
    alert("Invalid Choice!!!");
}



