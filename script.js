// projects.html

var coll = document.getElementsByClassName("expand");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// about.html

function calculateAge(birthDate) {
  const now = new Date();
  const birth = new Date(birthDate);
  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();
  let days = now.getDate() - birth.getDate();

  if (days < 0) {
      months -= 1;
      days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }

  if (months < 0) {
      years -= 1;
      months += 12;
  }

  return `${years} years, ${months} months, and ${days} day`;
}

document.addEventListener("DOMContentLoaded", function() {
  const birthDate = '2007-05-01';
  const ageElement = document.getElementById('age');
  ageElement.textContent = calculateAge(birthDate);
});



const questions = [
  {
    question: "Click the lie!",
    options: ["I once joined the four evenings' walk", "I have more than 3 siblings", "I have never left my home country"],
    answer: "I have more than 3 siblings"
  },
  {
    question: "Click the lie!",
    options: ["I am fluent in Dutch and English", "I have never been to a concert", "I used to have a huge variety of animals in my house"],
    answer: "I have never been to a concert"
  },
  {
    question: "Click the lie!",
    options: ["I enjoy horror movies", "I have a brother and a sister", "I have worked in retail"],
    answer: "I enjoy horror movies"
  },
  {
    question: "Click the lie!",
    options: ["I have never tried sushi.", "I have been on a cruise", "I do not know how to play any musical instruments."],
    answer: "I have been on a cruise"
  },
  {
    question: "Click the lie!",
    options: ["I have my A and B swim-diplomas", "I have a library membership", "I have been on an inverted rollercoaster"],
    answer: "I have been on an inverted rollercoaster"
  },
  {
    question: "Click the lie!",
    options: ["I have a RTX 4090", "I have read over 100 books in my life", "I love to play board games"],
    answer: "I have a RTX 4090"
  }
];



let currentQuestionIndex = 0;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const resultElement = document.getElementById('result');
    const againButton = document.getElementById('again');

    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;

    optionsElement.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });

    resultElement.textContent = '';
    againButton.style.display = 'none';
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    const resultElement = document.getElementById('result');
    const againButton = document.getElementById('again');

    if (selectedOption === question.answer) {
        resultElement.textContent = 'Correct!';
        resultElement.style.color = '#28a745';
    } else {
        resultElement.textContent = 'Wrong! The correct answer is ' + question.answer;
        resultElement.style.color = '#dc3545';
    }

    againButton.style.display = 'block';
}

function loadNextQuestion() {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    displayQuestion();
}

document.getElementById('again').onclick = () => {
    loadNextQuestion();
    document.getElementById('again').style.display = 'none';
};

displayQuestion();