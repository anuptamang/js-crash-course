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

    let currentScrollPosition = 0;

    const handleStickyHeader = (header) => {
      const headerRect = header.getBoundingClientRect();
      const headerHeight = headerRect.height;
      const scrollCheckerValue = headerHeight / 2;

      // adding fixed class on simple scroll can be done by using only getBoundingClientRect()
      // But if we want to check for more conditions like scroll position, we can use window.scrollY together to handle control flow
      //

      const scrollPosition = window.scrollY;

      // console.log(headerRect, "inside scroll event");

      // console.log(scrollPosition, "scrollPosition");
      // console.log(currentScrollPosition, "currentScrollPosition");
      // console.log(headerHeight, "headerHeight");

      if (scrollPosition > scrollCheckerValue) {
        header.classList.add("is-sticky");
        // header.classList.add("go-up");
        // if (header.classList.contains("come-down")) {
        //   header.classList.remove("come-down");
        // }
        // setTimeout(() => {
        //   if (header.classList.contains("go-up")) {
        //     header.classList.add("come-down");
        //   }
        // }, 500);
        // if (currentScrollPosition > scrollPosition) {
        //   header.classList.add("come-down");
        // }
      } else {
        header.classList.remove("is-sticky");
        // header.classList.remove("go-up");
        // header.classList.remove("come-down");
      }
      // currentScrollPosition = scrollPosition;
    };

    // handle scroll
    const handleHeader = () => {
      const header = document.querySelector("header");
      if (!header) return;
      handleStickyHeader(header);
    };

    // handle Section on viewport
    const handleSection = (section, index) => {
      const sectionRect = section.getBoundingClientRect();
      const sectionHeight = sectionRect.height;
      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;

      const viewportCheckerValue = {
        // start means when the section is just appear on the viewport
        start: window.innerHeight,
        // half means when the section is half appear on the viewport
        half: window.innerHeight / 2,
        // quarter means when the section is quarter appear on the viewport
        quarter: window.innerHeight / 4,
      };

      console.log(sectionRect, "sectionRect-" + (index + 1));
      console.log(window.innerHeight, "window.innerHeight");
      console.log(viewportCheckerValue, "viewportCheckerValue");
      // console.log(window.outerHeight, "window.outerHeight");
      // console.log(document.body.clientHeight, "document.body.clientHeight");

      const isSectionOnViewport =
        sectionTop < viewportCheckerValue.quarter &&
        sectionBottom > viewportCheckerValue.quarter;

      if (isSectionOnViewport) {
        section.classList.add("in-viewport");
      } else {
        section.classList.remove("in-viewport");
      }
    };

    const handleSectionOnViewport = () => {
      const infoSections = document.querySelectorAll(".info-section");

      infoSections.forEach((section, index) => {
        handleSection(section, index);
      });
    };

    handleHeader();
    handleSectionOnViewport();
    document.addEventListener("scroll", () => {
      handleHeader();
      handleSectionOnViewport();
    });

    // links.forEach((link) => handelHover(link));
    // links.forEach((link) => handleClick(link));
  };

  handleMenuLinks();
}
