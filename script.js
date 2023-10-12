document.addEventListener("DOMContentLoaded", () => {
    const navigationheight = document.querySelector('nav').offsetHeight;
    document.documentElement.style.setProperty('--scroll-padding', navigationheight + 'px');
    document.documentElement.style.setProperty('--reverse-padding', (navigationheight * -1) + 'px');

    const sections = document.querySelectorAll("section"); // Get all sections
    const navLinks = document.querySelectorAll("nav .button"); // Get all navigation links

    // Scroll event listener for updating active link
    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - navigationheight;
            const sectionBottom = sectionTop + section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentSection = section.getAttribute("id");
            }
        });

        // Update active link based on current section
        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });

    // Scroll to top button
    const scrollToTopButton = document.querySelector(".scroll-to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopButton.style.opacity = "1";
        } else {
            scrollToTopButton.style.opacity = "0";
        }
    });

    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    centerImage();
});

function centerImage() {
    var image = document.querySelector(".content-image");
    var container = image.parentElement; // Get the parent container of the image

    // Calculate the position to center the image both horizontally and vertically
    var leftOffset = (container.clientWidth - image.clientWidth) / 2;
    var topOffset = (container.clientHeight - image.clientHeight) / 2;

    // Set the image's position using CSS
    image.style.left = leftOffset + "px";
    image.style.top = topOffset + "px";

    // Make the image visible after positioning it
    image.style.visibility = "visible";
}
