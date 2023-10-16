//Animation
AOS.init();

// COUNTER JS 
// Select elements with the "data-val" attribute
let valueDisplayElements = document.querySelectorAll("[data-val]");
let interval = 10; // Interval in milliseconds (1 second in this example)

valueDisplayElements.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let currentValue = startValue;

    // Function to update the counter value
    function updateCounter() {
        valueDisplay.textContent = currentValue;
        currentValue++;

        // Stop the counter when it reaches the endValue
        if (currentValue > endValue) {
            clearInterval(counterInterval);
        }
    }

    // Start the counter interval
    let counterInterval = setInterval(updateCounter, interval);

    // Immediately display the initial value
    updateCounter();
});

//SLIDER 
var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: true, 
    },
  });