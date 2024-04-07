// logout
const logout = document.querySelector("li.logout");
logout.addEventListener("click", async (e) => {
    e.preventDefault();
    const confirmed = confirm("are u sure u want to logout");


    //if true then logout user 
    if (confirmed == true) {
        window.location.href = '/login';
    }
});


const menu_bar = document.querySelector('.bi-list');
const icon = document.querySelector('.menu');
const iconMenu = document.querySelector('.menuBar');
const items = document.querySelectorAll('li a p');
const container = document.querySelector('.container');

let isToggled = false;

menu_bar.addEventListener('click', () => {
    isToggled = !isToggled;

    if (isToggled) {
        container.style.gridTemplateColumns = '5% 1fr 30%';
        icon.style.gridTemplateColumns = '5% 1fr';
        iconMenu.style.justifyContent = 'flex-start';
        items.forEach(item => {
            item.style.display = 'none';
        });
    } else {
        container.style.gridTemplateColumns = '';
        icon.style.gridTemplateColumns = '';
        iconMenu.style.justifyContent = '';
        items.forEach(item => {
            item.style.display = '';
        });
    }
});