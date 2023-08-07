const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Front-End Developer";
    }, 0);

    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 4000);

    setTimeout(() => {
        text.textContent = "Content Creator";
    }, 8000);
};

textLoad();
setInterval(textLoad, 12000);