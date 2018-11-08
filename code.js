const div = document.querySelector('div');
const divArray = [...document.querySelectorAll('div')];
let clicks = 0;
const counter = document.querySelector('.counter');
const left = document.querySelector('.left');
const answerTxt = document.querySelector('.answerTxt');
const answerBtn = document.querySelector('.guess');
const showBtn = document.querySelector('.show');
const randomPicBtn = document.querySelector('.random');
const image = document.querySelector('section.picture');
let indexArray = [];
const newArray = [];
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
    console.log(`url(img/img${indexValue}.jpg)`);
}

const hidePic = () => {
    divArray.forEach(item => {
        item.classList.remove('visible')
    })
}




const checkAnswer = () => {
    let answer = answerTxt.value.toUpperCase();
    let correctAnswer = imagesList[indexValue].name.toUpperCase();
    if (answer === correctAnswer) {
        alert('Gratulacje! Odgadłeś hasło!');
        divArray.forEach(item => {
            item.classList.add('visible');
            clicks = 0;
            divArray = [...document.querySelectorAll('div')];
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

    let index = Math.floor(Math.random() * divArray.length);

    divArray[index].classList.add('visible');
    clicks++;

    divArray.splice(index, 1);
    newArray.push(index, );

    let arraysLength = divArray.length + newArray.length;
    counter.textContent = `${clicks}/${arraysLength}`;
    if (clicks >= arraysLength) {
        alert('Przekroczyłeś dozwolona liczbę kliknięć!');
        return;
    }


    console.log(divArray);
    console.log(newArray);
    console.log(clicks);

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


// zabezpieczenie przed wylosowaniem tego samego diva
// let found = false;
// if (divArray[index].classList.contains('visible')) {
//     index = Math.floor(Math.random() * divArray.length);
//     found === false;
// } else {
//     found !== false
// }