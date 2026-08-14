// Small amount of progressive enhancement.
// The page remains fully functional without JavaScript.

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(
        ".capability-card, .process-card"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.1
        }
    );


    cards.forEach((card) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(10px)";
        card.style.transition =
            "opacity 500ms ease, transform 500ms ease";

        observer.observe(card);

    });

});
