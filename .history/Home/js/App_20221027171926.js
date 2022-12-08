function sendEmail() {
    
    Email.send({
        secureToken: "0ab2dd1a-b4d4-40d2-90bc-3ed827907c01",
        To : 'hieunm14092001@gmail.com',
        From : document.getElementById('footer-contact__email').value,
        Subject : document.getElementById('footer-contact__message').value,
        Body : "Name: " +document.getElementById('footer-contact__name').value
        + "<br> Email: " + document.getElementById('footer-contact__email').value
        + "<br> Phone: " + document.getElementById("footer-contact__phone").value 
        + "<br> Message: " + document.getElementById("footer-contact__message").value 
    }).then(
      message => alert("message Succesfully")
    );
}