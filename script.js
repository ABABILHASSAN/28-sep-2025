let navbar = document.querySelector('header nav');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
};




// Make each FAQ collapsible
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    // Close other items
    faqItems.forEach(i => {
      if(i !== item) i.classList.remove('active');
    });
    // Toggle current item
    item.classList.toggle('active');
  });
});

// "More FAQs" button (example: you can add more items dynamically)
const moreBtn = document.getElementById('more-faqs');

moreBtn.addEventListener('click', () => {
  alert("This can be used to load more FAQs dynamically.");
});


