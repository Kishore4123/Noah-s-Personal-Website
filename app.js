const titleText = "Hello! I am Noah Dinh (丁國俊).";
  const descText = "A professional language teacher, teaching chinese as a second language, experienced in teaching international students in Taiwan and training them for language tests like TOCFL. I am passionate about helping students achieve their language goals and providing them with the necessary skills to succeed in their language learning journey. With my expertise and dedication, I strive to create a supportive and engaging learning environment for my students. I am proud about my students who now work across the globe with proficiencies in multiple languages.";

  // Grab the elements
  const titleElement = document.getElementById("hero-title");
  const descElement = document.getElementById("hero-desc");

  // Typing speed in milliseconds
  const typingSpeed = 50; 
  const fastTypingSpeed = 20; // Faster speed for the long paragraph

  let titleIndex = 0;
  let descIndex = 0;

  // Function to type the H1
  function typeTitle() {
    if (titleIndex < titleText.length) {
      titleElement.innerHTML += titleText.charAt(titleIndex);
      titleIndex++;
      setTimeout(typeTitle, typingSpeed);
    } else {
      // Once H1 is done, move the cursor effect to the paragraph and start typing it
      titleElement.classList.remove("cursor-effect");
      descElement.classList.add("cursor-effect");
      setTimeout(typeDesc, 300); // 300ms pause before paragraph starts
    }
  }

  // Function to type the Paragraph
  function typeDesc() {
    if (descIndex < descText.length) {
      descElement.innerHTML += descText.charAt(descIndex);
      descIndex++;
      setTimeout(typeDesc, fastTypingSpeed);
    } else {
      // Optional: Remove cursor when everything is completely finished
      setTimeout(() => {
        descElement.classList.remove("cursor-effect");
      }, 2000); // Cursor blinks for 2 seconds after finishing, then disappears
    }
  }

  // Start the typing effect when the window loads
  window.onload = () => {
    typeTitle();
  };

  document.addEventListener("DOMContentLoaded", () => {
  const myCarousel = document.getElementById('myCarousel');
  
  // 1. Trigger animation on the first slide immediately on load
  const firstCaption = myCarousel.querySelector('.carousel-item.active .caption-animate');
  if (firstCaption) {
    firstCaption.classList.add('show-text');
  }

  // 2. Listen for Bootstrap's slide event
  myCarousel.addEventListener('slid.bs.carousel', function (event) {
    
    // Remove the animation class from all captions
    const allCaptions = myCarousel.querySelectorAll('.caption-animate');
    allCaptions.forEach(caption => {
      caption.classList.remove('show-text');
    });

    // Add the animation class ONLY to the newly active slide
    const activeSlide = event.relatedTarget; // The slide that just moved into view
    const activeCaption = activeSlide.querySelector('.caption-animate');
    
    if (activeCaption) {
      // Small timeout ensures the browser registers the class removal before adding it back
      setTimeout(() => {
        activeCaption.classList.add('show-text');
      }, 50); 
    }
  });
});