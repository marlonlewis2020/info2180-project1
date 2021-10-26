/* Add your JavaScript to this file */
window.onload = function(){
    var msg = document.getElementsByClassName("message")[0];
    newsletter = document.getElementsByTagName("form")[0];

    newsletter.addEventListener("submit", function(event){
        event.preventDefault();
        msg.textContent = "";
        let email = String(document.getElementById("email").value);

        let elen = email.length-1;
        let ends = [".com", ".org", ".net", ".biz", ".co"]
        if (elen > 5 && /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) && (ends.includes(email.substring(lent - 3)))){
            msg.textContent = "Thank You! Your email address " 
            + email + " has been added to our mailing list!";
        }
        else {
            msg.textContent = "Please enter a valid email address.";
        }
        document.getElementById("email").value="";
        document.getElementById("email").placeholder="Enter your email";

    })

}