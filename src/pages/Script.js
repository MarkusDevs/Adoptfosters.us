const toggleNav = document.querySelector(".hamburger");
const navLink = document.querySelectorAll("#navLink");

toggleNav.addEventListener('click', () => {
    document.body.classList.add('hamburger-open');
    // document.body.classList.remove('hamburger-open');
    
})

navLink.forEach(link => {
    if(link){
        link.addEventListener('click', () => {
            document.body.classList.remove('hamburger-open');
        })
    }
})
