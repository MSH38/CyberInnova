$(document).ready(function () {
    // Initialize the Who We Are slider to automatically slide every 3 seconds
    $('#whoWeAreSlider').carousel({
        interval: 3000
    });
});
// window.addEventListener('scroll', function() {
//     const header = document.querySelector('header');
//     header.classList.toggle('scrolled', window.scrollY > 50);
//   });
  
  
//       let slideIndex = 0;
//       let autoSlideTimeout;
  
//       function showSlides() {
//           let i;
//           let slides = document.getElementsByClassName("slides");
//           for (i = 0; i < slides.length; i++) {
//               slides[i].style.display = "none";  
//           }
//           slideIndex++;
//           if (slideIndex > slides.length) {slideIndex = 1}    
//           slides[slideIndex-1].style.display = "block";  
//           autoSlideTimeout = setTimeout(showSlides, 5000); // Change slide every 5 seconds
//       }
  
//       function changeSlide(n) {
//           clearTimeout(autoSlideTimeout);  // Stop the auto-sliding when the user interacts
//           slideIndex += n - 1;  // Adjust index for manual control
//           if (slideIndex < 0) {
//               slideIndex = document.getElementsByClassName("slides").length - 1;
//           }
//           showSlides();
//       }
  
//       showSlides();  // Start the slideshow
  
document.addEventListener('scroll', function() {
    var carousel = document.querySelector('#mainSlider');
    var carouselItems = carousel.querySelectorAll('.carousel-item');
    
    carousel.addEventListener('slide.bs.carousel', function (e) {
        var nextSlide = e.relatedTarget;
        carouselItems.forEach(function(item) {
            item.querySelector('p').style.display = 'none';
        });
        nextSlide.querySelector('p').style.display = 'block';
    });
    carouselItems[0].querySelector('p').style.display = 'block';
});
  
  
  