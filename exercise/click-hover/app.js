document.addEventListener("DOMContentLoaded", function () {
  initDomManipulation();
});

function initDomManipulation() {
  // access the components
  // const infoSections = document.querySelectorAll(".info-section");
  // const handleInfoSection = (section) => {
  //   // independent component
  //   const heading = section.querySelector("h1");
  //   // if(!heading) return;
  //   if (section?.classList.contains("second")) {
  //     heading.textContent = "updated text";
  //     heading.style.color = "green";
  //   }
  //   section.addEventListener("click", function () {
  //     section.classList.toggle("active");
  //   });
  // };
  // infoSections.forEach((section) => {
  //   handleInfoSection(section);
  // });

  const handleMenuLinks = () => {
    const nav = document.querySelector(".nav");
    if (!nav) return;

    const links = nav.querySelectorAll("a"); // NodeList[]

    const handelHover = (link) => {
      link.addEventListener("mouseover", () => {
        // const parentElement = link.parentElement.parentElement;

        // const parentElement = link.closest("ul");

        // parentElement.querySelectorAll("a").forEach((a) => {
        //   a.style.color = "blue";
        //   link.style.color = "red";
        // });
        link.style.color = "red";
        // console.log(parentElement);
      });

      link.addEventListener("mouseleave", () => {
        // const parentElement = link.parentElement.parentElement;

        // const parentElement = link.closest("ul");

        // parentElement.querySelectorAll("a").forEach((a) => {
        //   a.style.color = "blue";
        //   link.style.color = "red";
        // });

        link.style.color = "blue";

        // console.log(parentElement);
      });
    };

    const handleClick = (link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        // link.style.color = "green";
        const parentElement = link.closest("ul");

        parentElement.querySelectorAll("a").forEach((a) => {
          a.style.color = "blue";
          link.style.color = "green";
        });
      });
    };

    links.forEach((link) => handelHover(link));
    links.forEach((link) => handleClick(link));
  };

  handleMenuLinks();
}
