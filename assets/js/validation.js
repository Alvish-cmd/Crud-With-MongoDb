let firstname=document.getElementById("txtfirstname");
let email=document.getElementById("txtemail");
let dob = document.getElementById("txtdob");
let pwd=document.getElementById("txtpassword");
let phonenumber = document.getElementById("txtphonenumber")
let dropdown = document.getElementById("country")
let address = document.getElementById("address")
let form=document.querySelector("form");



document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
});
 const successMsg =() => {
    let formCon = document.getElementsByClassName('form-group')
    var count = formCon.length-1;
    for(var i=0;i<formCon.length;i++){
        if (formCon[i].className === "form-group success") {
            var successRate = 0 + i;
            sendData(firstname.value,count,successRate)
        }else{
            return false;
        }
    }
    
 }

console.log("Hello");

function validateInput(){
    var letter = /^[a-zA-Z]*$/;
    // First name Validation
    if(firstname.value.trim()===""){
       onError(firstname,"First name cannot be empty");
    }
    else if(firstname.value.length <  3)
    {
        onError(firstname,"First Name should be 3 letter");
    }
    else if(!firstname.value.match(letter))
    {
        onError(firstname,"First Name contain only alphbets");
    }
    else{
        onSuccess(firstname);
    }

    // Email Validation
    if(email.value.trim()===""){
        onError(email,"Email cannot be empty");
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Email is not valid");
        }else{
            onSuccess(email);
        }
    }

    // Password Validation
    if(pwd.value.trim()===""){
        onError(pwd,"Password cannot be empty");
     }
     else if(pwd.value.length <  7)
     {
         onError(pwd,"Password should be 7 letter");
     }
     else{
         onSuccess(pwd);
     }

    //  Date of birth validation
     if(dob.value === ""){
        onError(dob,"Date cannot be empty")
     }
     else{
        onSuccess(dob);
     }

    //  Phone Number Validation
     if(phonenumber.value === ""){
        onError(phonenumber,"Phone Number cannot be empty");
     }
     else if(phonenumber.value.length <  10){
        onError(phonenumber,"Phone Number should be 10 digit");
     }
     else{
         onSuccess(phonenumber);
     }

    //  Dropdown Validation
     if(dropdown.value === ""){
        onError(dropdown,"Dropdown menu is requried")
     }
     else{
        onSuccess(dropdown);
     }

    //  Address Validation
     if(address.value === ""){
        onError(address,"Address is requried")
     }
     else{
        onSuccess(address);
     }
 successMsg()
}



function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden"; 
    parent.classList.remove("error");
    parent.classList.add("success");   
}
function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
    parent.classList.add("error");
    parent.classList.remove("success");

}

function isValidEmail(email){
   return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

