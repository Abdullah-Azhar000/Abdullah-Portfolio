// typer js //
const texts = ["Web Developer", "Web Designer", "Graphic Designer", "Freelancer"];
let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

document.addEventListener('DOMContentLoaded', () => {
    const typerElement = document.querySelector('.typer');

    if (typerElement) { 
        function type() {
            const currentText = texts[currentTextIndex];
            const displayText = currentText.slice(0, currentCharIndex);
            typerElement.textContent = displayText;

            if (isDeleting) {
                if (currentCharIndex > 0) {
                    currentCharIndex--;
                } else {
                    isDeleting = false;
                    currentTextIndex = (currentTextIndex + 1) % texts.length;
                }
            } else {
                if (currentCharIndex < currentText.length) {
                    currentCharIndex++;
                } else {
                    isDeleting = true;
                }
            }

            const typingSpeed = isDeleting ? 100 : 200;
            setTimeout(type, typingSpeed);
        }

        setTimeout(type, 300);
    }
});

// Isotope JS //
document.addEventListener("DOMContentLoaded", function () {
    const grid = document.querySelector('.grid');

    if (grid && typeof Isotope !== "undefined") { 
        var iso = new Isotope(grid, {
            itemSelector: '.grid-item',
            layoutMode: 'fitRows'
        });

        var filtersElem = document.querySelector('.filter-buttons');
        if (filtersElem) {
            filtersElem.addEventListener('click', function (event) {
                if (!event.target.matches('button')) return;
                var filterValue = event.target.getAttribute('data-filter');
                iso.arrange({ filter: filterValue });

                filtersElem.querySelectorAll('button')
                    .forEach(btn => btn.classList.remove('active'));
                event.target.classList.add('active');
            });
        }
    }
});

// Active link //
document.addEventListener("DOMContentLoaded", function () {
  // get the current page filename (e.g. "about.html")
  let currentPage = window.location.pathname.split("/").pop();

  // if on root domain, treat as "index.html"
  if (currentPage === "") currentPage = "index.html";

  // loop over nav links
  document.querySelectorAll(".nav-link").forEach(link => {
    // clean any existing 'active'
    link.classList.remove("active");

    // compare href with current page
    const linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});