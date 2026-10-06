document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------------------
     SCROLL REVEAL
  --------------------------------- */

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }

      });

    },
    {
      threshold: 0.12
    }
  );

  document
    .querySelectorAll(".reveal")
    .forEach((element) => {

      observer.observe(element);

    });


  /* ---------------------------------
     CURSOR LIGHT
  --------------------------------- */

  const glow = document.createElement("div");

  glow.className = "cursor-glow";

  document.body.appendChild(glow);

  document.addEventListener("mousemove", (event) => {

    glow.style.left =
      event.clientX + "px";

    glow.style.top =
      event.clientY + "px";

  });


  /* ---------------------------------
     HERO IMAGE MOVEMENT
  --------------------------------- */

  const heroVisual =
    document.querySelector(".hero-visual");

  if (heroVisual) {

    heroVisual.addEventListener(
      "mousemove",
      (event) => {

        const box =
          heroVisual.getBoundingClientRect();

        const x =
          event.clientX -
          box.left -
          box.width / 2;

        const y =
          event.clientY -
          box.top -
          box.height / 2;

        const image =
          heroVisual.querySelector(
            ".hero-image-frame"
          );

        if (image) {

          image.style.transform =
            `perspective(1000px)
             rotateY(${x / 60}deg)
             rotateX(${-y / 60}deg)`;

        }

      }
    );

    heroVisual.addEventListener(
      "mouseleave",
      () => {

        const image =
          heroVisual.querySelector(
            ".hero-image-frame"
          );

        if (image) {
          image.style.transform = "";
        }

      }
    );

  }

});