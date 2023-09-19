const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Get all the menu items
const menuItems = document.querySelectorAll('#menu li a');

// Add click event listener to each menu item
menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
        menu.classList.remove('active'); // Close the menu
    });
});