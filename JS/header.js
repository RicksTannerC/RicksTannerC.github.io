window.addEventListener("scroll", () => {

    const navBar = document.getElementById("navBar");

    if (window.scrollY > 35) {
        navBar.classList.add("scrolled");
        console.log(window.scrollY);
    } else {
        navBar.classList.remove("scrolled");
        console.log(window.scrollY);

    }
});