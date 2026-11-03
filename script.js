const buttons = document.querySelectorAll(".design-btn");
const car = document.querySelector("#designCar");
const title = document.querySelector("#designTitle");
const text = document.querySelector("#designText");

buttons.forEach((button) => {

    button.addEventListener("click", ()=>{

        // sab buttons sa active hatao

buttons.forEach((btn) => {
btn.classList.remove("active");
});

   //  Clicked button ko active karo
   button.classList.add("active");

       //  Image aur section ka naam 

       const image = button.dataset.image;
       const section = button.textContent.trim();

             //  SIDE image ki special class hatao

       car.classList.remove("side-image");
car.classList.remove("rear-image");

if (section === "SIDE" || section === "WHEELS") {
    car.classList.add("side-image");
}

if (section === "REAR") {
    car.classList.add("rear-image");
}

              //  IMAGE ANIMATION
              
                    car.style.opacity = "0";
        car.style.transform = "scale(0.85) translateY(20px)";

             title.style.opacity = "0";
        title.style.transform = "translateY(20px)";

        text.style.opacity = "0";
        text.style.transform = "translateY(20px)";


           setTimeout(() => {

            // Image change
            car.src = image;

            // Title + text change
            if (section === "FRONT") {

                title.textContent = "FRONT DESIGN";

                text.textContent =
                    "A sharp and sculpted front profile created to balance aggressive styling with aerodynamic performance.";

            } else if (section === "SIDE") {

                title.textContent = "SIDE PROFILE";

                text.textContent =
                    "A low and flowing silhouette gives the F8 Tributo its unmistakable performance-focused character.";

            } else if (section === "WHEELS") {

                title.textContent = "WHEELS";

                text.textContent =
                    "Lightweight wheels complement the athletic proportions while contributing to the car's dynamic character.";

            } else if (section === "REAR") {

                title.textContent = "REAR DESIGN";

                text.textContent =
                    "The rear combines distinctive Ferrari styling with aerodynamic elements developed around performance.";
            }

              car.style.opacity = "1";
            car.style.transform = "scale(1) translateY(0)";

            title.style.opacity = "1";
            title.style.transform = "translateY(0)";

            text.style.opacity = "1";
            text.style.transform = "translateY(0)";

        }, 300);
    });
});


//  ==========================
//     section 3 performance
//     ========================

const numbers = document.querySelectorAll(".stat-number");

numbers.forEach((number) =>{
    const target = Number(number.dataset.target);

    gsap.fromTo(number,

        // starting value
        {innerText : 0},
        {
            innerText: target,
            duration:2,

            snap : {
                innerText : 1
            },
            scrollTrigger : {
                trigger : ".performance-section",
                start : "top 75%",
                toggleActions : "restart none restart none"
            }
        }
    );



});





// ==============================
// CONTACT FORM
// ==============================

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

const recipientEmail = "ek1807534@gmail.com";

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const emailInput = document.getElementById("email");
        const email = emailInput.value.trim();
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value.trim();

        if (!fullName || !email || !subject || !message) {
            formStatus.textContent = "Please fill in all fields before continuing.";
            return;
        }

        if (!emailInput.checkValidity()) {
            formStatus.textContent = "Please enter a valid email address.";
            emailInput.focus();
            return;
        }

        const emailBody =
            "Full Name: " + fullName + "\n" +
            "Email Address: " + email + "\n" +
            "Subject: " + subject + "\n\n" +
            "Message:\n" + message;

        const mailtoLink =
            "mailto:" + recipientEmail +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(emailBody);

        const submitBtn = contactForm.querySelector('button[type="submit"]');

        // Purane timers clear karna
        clearTimeout(window.contactFormResetTimer);
        clearTimeout(window.contactFormNormalTimer);

        // 1) Button GREEN
        if (submitBtn) {
            submitBtn.textContent = "✓ Message Prepared!";
            submitBtn.classList.remove("reset-state");
            submitBtn.classList.add("submitted");
            submitBtn.disabled = true;
        }

        formStatus.textContent =
            "Your message is prepared. Please send it from your email application.";

        // Mail app kholna
        setTimeout(() => {
            window.location.href = mailtoLink;
        }, 500);

        // 2) 2.5 sec baad: fields EMPTY + button RED
        window.contactFormResetTimer = setTimeout(() => {
            contactForm.reset();

            if (submitBtn) {
                submitBtn.textContent = "Form Cleared";
                submitBtn.classList.remove("submitted");
                submitBtn.classList.add("reset-state"); // RED
            }

            formStatus.textContent = "";

            window.contactFormNormalTimer = setTimeout(() => {
                if (submitBtn) {
                    submitBtn.textContent = "Send Message";
                    submitBtn.classList.remove("reset-state");
                    submitBtn.disabled = false;
                }
            }, 1500);
        }, 2500);
    });
}



// footer year=================
const footerYear = document.getElementById("footerYear");
if (footerYear) footerYear.textContent = new Date().getFullYear();