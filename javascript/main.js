let text = document.querySelector('.msg-amor');

let htmlSpans = text.innerText.split('').map
((letter, i) => {
    return `<span style="animation-duration: ${Math.random() * 10}s; filter: hue-rotate(${i *5}deg">${letter}</span>`
}).join('');

text.innerHTML = htmlSpans;

console.log(htmlSpans);