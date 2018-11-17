const div = document.querySelector('div.pic');
let divArray = [...document.querySelectorAll('div.pic')];
let clicks = 1;
const counter = document.querySelector('.counter');
const left = document.querySelector('.left');
const answerTxt = document.querySelector('.answerTxt');
const answerBtn = document.querySelector('.guess');
const showBtn = document.querySelector('.show');
const randomPicBtn = document.querySelector('.random');
const image = document.querySelector('section.picture');
let answer = answerTxt.value.toUpperCase();
let indexArray = [];
let imagesList = [{
        img: "img/img0.jpg",
        name: 'upadek ikara',
    },
    {
        img: "img/img1.jpg",
        name: 'polowanie na dzika kalidońskiego',
    },
    {
        img: "img/img2.jpg",
        name: 'dama z gronostajem',
    },
    {
        img: "img/img3.jpg",
        name: 'babie lato',
    }
];


let randomIndex = () => {
    return Math.floor(Math.random() * imagesList.length);
}

let indexValue = randomIndex();

const startPicture = () => {
    image.style.backgroundImage = `url(img/img${indexValue}.jpg)`;
}

const choosePicture = () => {
    indexValue = randomIndex();
    image.style.backgroundImage = `url(img/img${indexValue}.jpg)`;
}

const hidePic = () => {
    clicks = 1;
    divArray.forEach(item => {
        item.classList.remove('visible');
    })
}



const checkAnswer = () => {
    answer = answerTxt.value.toUpperCase();
    let correctAnswer = imagesList[indexValue].name.toUpperCase();
    if (answer === correctAnswer) {

        alert('Gratulacje! Odgadłeś hasło!');
        divArray.forEach(item => {
            item.classList.add('visible');
            divArray = [...document.querySelectorAll('div.pic')];
            answerTxt.value = "";
        });
        setTimeout(hidePic, 2000);
        setTimeout(choosePicture, 2000);
    } else {
        alert('Nie zgadłeś! Może Uda Ci się następnym razem');
        alert(`Poprawna odpowiedź to ${imagesList[indexValue].name.toUpperCase()}`)
        divArray.forEach(item => {
            item.classList.remove('visible');
        })
    }
}


const guessPic = () => {
    counter.textContent = `${clicks}/${(divArray.length+clicks-1)}`;
    let index = Math.floor(Math.random() * divArray.length);
    let found = true; {
        if (divArray.includes[index]) {
            found == false;
        } else {
            found = true;
            if (found = true) {
                divArray[index].classList.add('visible');
                clicks++;
                divArray.splice(index, 1);

            }
        }
    }
    if ((clicks) >= (divArray.length + clicks)) {
        alert('Przekroczyłeś dozwolona liczbę kliknięć!');

    }
}


showBtn.addEventListener('click', guessPic);
answerBtn.addEventListener('click', checkAnswer);
document.addEventListener('DOMContentLoaded', startPicture);
randomPicBtn.addEventListener('click', choosePicture);



//zmiany po kliknięciu w konkretny div
// divArray.forEach(item => {
//     left.textContent = divArray.length;
//     item.addEventListener('click', function () {
//         item.classList.add('visible');
//         clicks++;
//         if (clicks > divArray.length) {
//             alert('przekroczyłeś liczbę kliknięć!');
//             return;
//         }

//         counter.textContent = clicks;
//         left.textContent = divArray.length - clicks;
//     })
// })