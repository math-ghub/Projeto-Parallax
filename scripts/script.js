const q1 = document.querySelector("#q1");
const q2 = document.querySelector("#q2");
const q3 = document.querySelector("#q3");
const q4 = document.querySelector("#q4");
const q5 = document.querySelector("#q5");
const q6 = document.querySelector("#q6");
let canScroll = true;

window.addEventListener("scroll", () => {
    if (!canScroll) return;
    const scrollVal = window.scrollY.valueOf();

    const bg1 = delayPos(scrollVal, 1.2);
    const bg2 = delayPos(scrollVal, 1.3);
    const bg3 = delayPos(scrollVal, 1.8);
    const bg4 = delayPos(scrollVal, 4);
    const bg5 = delayPos(scrollVal, 6);
    const bg6 = delayPos(scrollVal, 6);

    const catAnimation = 25 * scrollVal / 100;

    new Promise((r) => {
        q3.style.transform = `translateY(${bg1}px)`;
        q2.style.transform = `translateY(${bg2}px)`;
        q1.style.transform = `translateY(${bg3}px)`;
        q4.style.transform = `translateY(${bg4}px)`;
        q5.style.transform = `translate(${catAnimation}px, ${bg5}px)`;
        q6.style.transform = `translateY(${bg6}px)`;
    })
})

function delayPos(n, delay) {
    return n / delay;
}