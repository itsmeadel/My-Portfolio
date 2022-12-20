const { EmailJSResponseStatus } = require("emailjs-com");

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_2407l6o";
  const templateID = "template_g2x3qfq";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";

      console.log(res);
      alert("Your message has been sent successfully!");
    })

    .catch((err) => console.log(err));
}
