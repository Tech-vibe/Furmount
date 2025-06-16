// Dropdown Menu Functionality
const menuButton = document.getElementById('menu-button');
const dropdownMenu = document.getElementById('dropdown-menu');

if (menuButton && dropdownMenu) {
  // Toggle dropdown menu visibility
  menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !isExpanded);
    dropdownMenu.classList.toggle('hidden', isExpanded);
  });

  // Close dropdown if clicked outside
  document.addEventListener('click', (event) => {
    if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.add('hidden');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });

  // Show dropdown on hover
  menuButton.addEventListener('mouseover', () => {
    dropdownMenu.classList.remove('hidden');
    menuButton.setAttribute('aria-expanded', 'true');
  });

  // Hide dropdown on mouse leave
  menuButton.addEventListener('mouseleave', () => {
    setTimeout(() => {
      if (!dropdownMenu.matches(':hover')) {
        dropdownMenu.classList.add('hidden');
        menuButton.setAttribute('aria-expanded', 'false');
      }
    }, 200);
  });

  dropdownMenu.addEventListener('mouseenter', () => {
    dropdownMenu.classList.remove('hidden');
  });

  dropdownMenu.addEventListener('mouseleave', () => {
    setTimeout(() => {
      dropdownMenu.classList.add('hidden');
      menuButton.setAttribute('aria-expanded', 'false');
    }, 200);
  });
}

// Burger Menu Functionality
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelectorAll('.navbar-burger');
  const menu = document.querySelectorAll('.navbar-menu');
  const close = document.querySelectorAll('.navbar-close');
  const backdrop = document.querySelectorAll('.navbar-backdrop');

  if (burger.length && menu.length) {
    burger.forEach((btn) => {
      btn.addEventListener('click', () => {
        menu.forEach((m) => m.classList.toggle('hidden'));
      });
    });
  }

  if (close.length) {
    close.forEach((btn) => {
      btn.addEventListener('click', () => {
        menu.forEach((m) => m.classList.toggle('hidden'));
      });
    });
  }

  if (backdrop.length) {
    backdrop.forEach((b) => {
      b.addEventListener('click', () => {
        menu.forEach((m) => m.classList.toggle('hidden'));
      });
    });
  }
});

// Carousel Functionality
const carousels = document.querySelectorAll('[data-carousel="slide"]');

carousels.forEach((carousel) => {
  const carouselItems = carousel.querySelectorAll('[data-carousel-item]');
  const slideIndicators = carousel.querySelectorAll('[data-carousel-slide-to]');
  const prevButton = carousel.querySelector('[data-carousel-prev]');
  const nextButton = carousel.querySelector('[data-carousel-next]');

  let currentIndex = 0;

  const showSlide = (index) => {
    carouselItems.forEach((item, idx) => {
      item.classList.remove('translate-x-0', 'translate-x-full', '-translate-x-full');

      if (idx === index) {
        item.classList.add('translate-x-0');
      } else if (idx < index) {
        item.classList.add('-translate-x-full');
      } else {
        item.classList.add('translate-x-full');
      }
    });

    slideIndicators.forEach((indicator, idx) => {
      indicator.setAttribute('aria-current', idx === index ? 'true' : 'false');
    });
  };

  if (nextButton) {
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % carouselItems.length; // Loop back to the first slide
      showSlide(currentIndex);
    });
  }

  if (prevButton) {
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length; // Loop back to the last slide
      showSlide(currentIndex);
    });
  }

  // Auto-slide functionality
  setInterval(() => {
    currentIndex = (currentIndex + 1) % carouselItems.length; // Loop back to the first slide
    showSlide(currentIndex);
  }, 3000);

  showSlide(currentIndex);
});

// Swiper Slider Initialization
const swiper = new Swiper('.centered-slide-carousel', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1920: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1028: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

// AOS Initialization
AOS.init({
  duration: 1000,
  offset: 200,
});