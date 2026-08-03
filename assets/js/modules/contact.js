console.log("contac js is loading")

emailjs.init("KrRNUSkO5Bd9IWqbs");

const contactForm = document.getElementById("contact-form");

console.log(contactForm);

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_733wetw",
            "template_utat5zv",
            this
        )

            .then(() => {

                alert("Message sent successfully!");

                contactForm.reset();

            })

            .catch((error) => {

                console.error(error);

                alert("Failed to send message.");

            });

    });

}