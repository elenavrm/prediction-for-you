const button = document.querySelector('#btn');
const par = document.querySelector('#par');

let text = 'Shall we?';
let i = 0;
let speed = 250;

function type() {
    if (i < text.length) {
        document.querySelector('#type').textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}
type();

const predictions = [
`✨It is never too late or too soon. It is when it is supposed to be.✨`,
`✨Become more aware of what’s worth your energy.✨`,
`✨You’ll find a way, you always have. And if there’s no way, you’ll redraw the map.✨`,
`✨Commit to doing what is good for your mind, body and spirit.✨`,
`✨Be happy with what you have while working on what you want.✨`,
`✨The coolest thing you can do is make the people around you feel special.✨`,
`✨You're not so special that it can happen to everyone else but you.✨`,
`✨No matter how difficult this moment feels, choose to take action.✨`,
`✨Choose to change, to evolve, to live the life you want to live.✨`,
`✨Be the reason why people believe in pure hearts, good vibes and kind souls.✨`,
`✨Success will come with consistency...✨`,
`✨The grass is not greener on the other side, it is greener where you are committed to constantly watering it.✨`,
`✨Don't worry too much, everything will fall into place.✨`,
`✨Be patient with yourself, nothing in nature blooms all year✨`,
`✨Wonderful things are about to happen✨`,
`✨Start believing that there's nothing that is 'too good' for you!✨`
]

button.addEventListener('click', ()=> {
    let randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
    par.style.display = 'block';
    par.textContent = randomPrediction;
})