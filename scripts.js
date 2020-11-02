/* Add your JavaScript to this file */
window.onload = function(){
    let buttons = document.getElementsByClassName("btn");
    var submit_button;
    var learn_more_button;
    var msg = document.getElementsByClassName("message")[0];
    
    for (button in buttons){
        if (button.type = "submit"){
            submit_button = button;
        }
        else{ 
            learn_more_button = button;
        }
    }

    function ValidateEmail(mail) {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value)){
            msg.textContent = "Thank You! Your email address " + mail + " has been added to our mailing list!";
        }
        else {
            msg.textContent = "Please enter a valid email address.";
        }
    }

    submit_button.addEventListener("click", function(){
        let email = document.getElementById("email");
        ValidateEmail(email);
    })

}