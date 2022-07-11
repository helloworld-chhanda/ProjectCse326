const contactForm = document.querySelector("#contact-form");
contactForm.addEventListener("submit", function(e){
    e.preventDefault();
    swal({
        title: "Thank You!",
        text: "Your query has been successfully submitted. We will contact you shortly",
        icon: "success",
        button: "Ok",
    }).then(function(){
        location.reload()
    })
});