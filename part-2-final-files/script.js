
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});


(function () {
  emailjs.init("fVVCS6zjf2ZFDgmcX");
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  
  emailjs.sendForm("service_6hio1jp", "template_3yztacg", this).then(
    function () {
      alert("Message Sent!");
    },
    function (error) {
      alert("Error: " + JSON.stringify(error));
    }
  );
});



document.addEventListener('DOMContentLoaded', function() {
    // About Section Toggle
    const aboutBtn = document.getElementById('aboutBtn');
    const aboutSection = document.getElementById('aboutSection');
    const closeAbout = document.getElementById('closeAbout');
    const aboutContent = document.querySelector('.about-animation');

    // Show About Section
    aboutBtn.addEventListener('click', () => {
        aboutSection.classList.remove('hidden');
        setTimeout(() => {
            aboutContent.classList.add('show');
        }, 10);
    });

    // Hide About Section
    function closeAboutSection() {
        aboutContent.classList.remove('show');
        setTimeout(() => {
            aboutSection.classList.add('hidden');
        }, 300);
    }

    // Close button
    closeAbout.addEventListener('click', closeAboutSection);

    // Close when clicking outside
    aboutSection.addEventListener('click', (e) => {
        if(e.target === aboutSection) {
            closeAboutSection();
        }
    });

    // Close with ESC key
    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape' && !aboutSection.classList.contains('hidden')) {
            closeAboutSection();
        }
    });
});