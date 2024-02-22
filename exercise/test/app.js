document.addEventListener("DOMContentLoaded", function () {
  // stickyHeader();
  viewportSection();
});

function stickyHeader() {
  // Declare DOM variables
  const body = document.body;
  const header = document.querySelector("header");
  if (!header) {
    console.warn("No header element found!");
    return;
  }

  // Declare some static string variables if any
  const isStickyClass = "is-sticky";
  const isActiveClass = "is-active";
  const isGoUpClass = "go-up";
  const isComeDownClass = "come-down";

  // Declare some options objects if any

  // Declare flags if will be any and so on..
  let currentScrollPosition = 0;
  //
  // Declare methods
  const handleSticky = () => {
    const headerRect = header.getBoundingClientRect();
    const headerHeight = headerRect.height;

    const headerScrollCheckerValue = headerHeight / 2;

    const scrollPosition = window.scrollY;

    // if (scrollPosition > headerScrollCheckerValue) {
    //   header.classList.add(isStickyClass);
    // } else {
    //   header.classList.remove(isStickyClass);
    // }

    // if (scrollPosition > headerScrollCheckerValue) {
    //   header.classList.add(isGoUpClass);

    //   if (header.classList.contains(isComeDownClass)) {
    //     header.classList.remove(isComeDownClass);
    //   }

    //   setTimeout(() => {
    //     if (header.classList.contains(isGoUpClass)) {
    //       header.classList.add(isComeDownClass);
    //     }
    //   }, 500);
    // } else {
    //   header.classList.remove(isGoUpClass);
    // }

    if (scrollPosition > headerScrollCheckerValue) {
      header.classList.add(isGoUpClass);

      if (header.classList.contains(isComeDownClass)) {
        header.classList.remove(isComeDownClass);
      }

      if (currentScrollPosition >= scrollPosition) {
        header.classList.add(isComeDownClass);
      }
    } else {
      header.classList.remove(isGoUpClass);
      header.classList.remove(isComeDownClass);
    }

    currentScrollPosition = scrollPosition;

    console.log(currentScrollPosition, "currentScrollPosition");
    console.log(headerScrollCheckerValue, "headerScrollCheckerValue");
    console.log(scrollPosition, "scrollPosition");

    console.log(headerRect, "headerRect");
  };
  //
  // Initialize the main method
  handleSticky();
  // Event handlers init
  document.addEventListener("scroll", () => {
    handleSticky();
  });

  // Return sub-methods to make them accessible from outer context

  return {
    handleSticky,
  };
}

function viewportSection() {
  const infoSections = document.querySelectorAll(".info-section");
  const isActiveClass = "in-viewport";

  // Declare some options objects if any
  const viewportCheckerValue = {
    // "start" => means the section is just appear on the viewport
    start: window.innerHeight,
    // "half" => means when the section is half appear on the viewport
    half: window.innerHeight / 2,
    // "quarter" => means when the section is quarter appear on the viewport
    quarter: window.innerHeight / 4,
  };

  const handleViewport = () => {
    infoSections.forEach((section, index) => {
      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;

      const isSectionOnViewport =
        sectionTop < viewportCheckerValue.quarter &&
        sectionBottom > viewportCheckerValue.quarter; // true/false

      if (isSectionOnViewport) {
        section.classList.add(isActiveClass);
      } else {
        // section.classList.remove(isActiveClass);
      }

      console.log(sectionRect, "sectionRect-" + (index + 1));
    });
  };

  handleViewport();
  document.addEventListener("scroll", () => {
    handleViewport();
  });

  console.log(viewportCheckerValue, "viewportCheckerValue");
  console.log(window.innerHeight, "window.innerHeight");
  console.log(window.outerHeight, "window.outerHeight");
  console.log(document.body.clientHeight, "document.body.clientHeight");
}
