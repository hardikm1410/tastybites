document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.restaurant-grid');
    const leftButton = document.getElementById('scrollLeft');
    const rightButton = document.getElementById('scrollRight');
    const scrollAmount = 750; // Adjust scroll amount as needed

    // Function to update button visibility
    function updateScrollButtons() {
        const scrollLeft = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        leftButton.classList.toggle('hidden', scrollLeft === 0);
        rightButton.classList.toggle('hidden', scrollLeft >= maxScroll);
    }

    // Scroll left button click handler
    leftButton.addEventListener('click', () => {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
        setTimeout(updateScrollButtons, 300); // Update after scroll animation
    });

    // Scroll right button click handler
    rightButton.addEventListener('click', () => {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
        setTimeout(updateScrollButtons, 300); // Update after scroll animation
    });

    // Listen for scroll events to update button visibility
    container.addEventListener('scroll', updateScrollButtons);

    // Initial button visibility check
    updateScrollButtons();
});

burger = document.querySelector('.burger')
navbar = document.querySelector('.nav-container')
navList = document.querySelector('.nav-links')


burger.addEventListener('click', ()=>{

  
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    
})