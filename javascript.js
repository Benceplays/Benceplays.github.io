
(function(){
   emailjs.init("DuOZjcdU_KFx6nfxG");
})();

function sendMail() {
    var ids = ["name", "email", "subject", "message"];
    emailjs.send("service_j2w2tfl","template_8csgr78",{
        name: document.getElementById(ids[0]).value,
        email: document.getElementById(ids[1]).value,
        subject: document.getElementById(ids[2]).value,
        message: document.getElementById(ids[3]).value
    }).then(function(response){
        alert("Üzenet elküldve!");
        for (let i = 0; i < ids.length; i++) {
            document.getElementById(ids[i]).value = "";
        }
    }, function(error){
        alert("Hiba történt: " + error);
    });
}