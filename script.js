const acceptBtn = document.getElementById('acceptBtn');
const endElement = document.querySelector('.end');
const termsBox = document.getElementById('terms');

// Create observer
const observer = new IntersectionObserver(

  function (entries) {
    const entry = entries[0];

    // If the last paragraph is visible
    if (entry.isIntersecting) {
      acceptBtn.disabled = false;
    }
  },

  {
    root: termsBox, // observe inside this scroll box
    threshold: 1.0, // 100% visible
  },
);

// Start observing the last paragraph
observer.observe(endElement);


