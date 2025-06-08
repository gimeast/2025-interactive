let pageX = 0,
    pageY = 0;
let targetX = 0,
    targetY = 0;
let speed = 0.03;

const title = document.querySelector(".title > img");
const imgAll = document.querySelectorAll(".content-wrap > div > img");

let i = 0;
const emoji = imgAll[i++];
const lion = imgAll[i++];
const mouse = imgAll[i++];
const instagram = imgAll[i++];

window.addEventListener("mousemove", (e) => {
    pageX = e.pageX - window.innerWidth / 2;
    pageY = e.pageY - window.innerWidth / 2;
});

const mouseMoveFunc = () => {
    title.style.transform = `rotateY(${targetX}deg) rotateX(${targetY}deg)`;
    emoji.style.transform = `rotateY(${targetX / 35}deg) rotateX(${targetY / 35}deg)`;
    lion.style.transform = `translate(${-targetX / 30}px, ${targetY / 40}px)`;
    mouse.style.transform = `translate(${targetX / 25}px, ${targetY / 10}px)`;
    instagram.style.transform = `translate(${-targetX / 10}px, ${targetY / 20}px)`;
};

const loop = () => {
    targetX += (pageX - targetX) * speed;
    targetY += (pageY - targetY) * speed;

    mouseMoveFunc();
    window.requestAnimationFrame(loop);
};

loop();
