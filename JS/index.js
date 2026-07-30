window.addEventListener("scroll", () => {

    const profilePic = document.getElementById("profilePic");

    if (window.scrollY > 50) {
        profilePic.classList.add("scrolled");
        console.log(window.scrollY);
    } else {
        profilePic.classList.remove("scrolled");
        console.log(window.scrollY);

    }
});