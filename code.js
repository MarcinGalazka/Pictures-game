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
let imagesList = [{
        img: "img/img0.jpg",
        name: 'upadek ikara',
    },
    {
        img: "img/img1.jpg",
        name: 'narodziny wenus',
    },
    {
        img: "img/img2.jpg",
        name: 'dama z gronostajem',
    },
    {
        img: "img/img3.jpg",
        name: 'babie lato',
    },
    {
        img: "img/img4.jpg",
        name: 'krzyk',
    },
    {
        img: "img/img5.jpg",
        name: 'trwałość pamięci',
    },
    {
        img: "img/img6.jpg",
        name: 'mona lisa',
    },
    {
        img: "img/img7.jpg",
        name: 'stworzenie adama',
    },
    {
        img: "img/img8.jpg",
        name: 'ostatnia wieczerza',
    },
    {
        img: "img/img9.jpg",
        name: 'bitwa pod grunwaldem',
    },

];


let randomIndex = () => {
    return Math.floor(Math.random() * imagesList.length);
}

let indexValue = randomIndex();

const startPicture = () => {
    image.style.backgroundImage = `url(img/img${indexValue}.jpg)`;
}

const choosePicture = () => {
    // let divArrayVisible = [...document.querySelectorAll('div.pic.visible')];
    // for (let i = 0; i <= divArrayVisible.length; i++) {
    //     divArrayVisible[i].classList.remove('visible');
    // }
    // divArray.forEach(item => {
    //     item.classList.remove('visible')
    // })
    hidePic();
    indexValue = randomIndex();
    image.style.backgroundImage = `url(img/img${indexValue}.jpg)`;
}

const hidePic = () => {
    divArray = [...document.querySelectorAll('div.pic')]
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
            answerTxt.value = "";
        });
        setTimeout(hidePic, 2000);
        setTimeout(choosePicture, 2000);
    } else {
        alert('Nie zgadłeś! Może Uda Ci się następnym razem');
        // alert(`Poprawna odpowiedź to ${imagesList[indexValue].name.toUpperCase()}`)
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
            found == true;
            if (found) {
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