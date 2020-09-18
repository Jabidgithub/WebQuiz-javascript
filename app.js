


// const answers = ['A', 'B', 'B', 'B'];
// const result = document.querySelector('.result');
// const forms = document.querySelector('.quiz-form');


// forms.addEventListener('submit', e => {
//     e.preventDefault();
//     const formAnswer = [forms.q1.value, forms.q2.value, forms.q3.value, forms.q4.value];

//     let score = 0;
//     formAnswer.forEach((quiz, index) => {

//         if (quiz === answers[index]) {
//             score += 25;
//         }

//     });


//     scrollTo(0, 0);
//     result.classList.remove('d-none');



//     let output = 0;
//     const timer = setInterval(() => {
//         result.querySelector('span').textContent = `${output}%`;
//         if (output === score) {
//             clearInterval(timer);
//         }
//         else {
//             output++;
//         }
//     }, );

// });

const answers = ['A', 'B', 'B', 'B'];
const result = document.querySelector('.result');
const forms = document.querySelector('.quiz-form');


forms.addEventListener('submit', e => {

    e.preventDefault();
    const formAnswers = [forms.q1.value, forms.q2.value, forms.q3.value, forms.q4.value];

    let score = 0;
    formAnswers.forEach((quiz, index) => {
        if (quiz === answers[index]) {
            score += 25;
        }
    })

    scrollTo(0, 0);

    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
            result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        }
        else {
            output++;
        }
    }, );   
});