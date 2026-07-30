window.addEventListener("scroll", () => {

    const profilePic = document.getElementById("profilePic");

    if (window.scrollY > 20) {
        profilePic.classList.add("scrolled");
        console.log(window.scrollY);
    } else {
        profilePic.classList.remove("scrolled");
        console.log(window.scrollY);

    }
});