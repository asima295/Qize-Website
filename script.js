const quiz = [
  {
    question: "What is a correct syntax for an HTML hyperlink?",
    ans1text: "<link href='/home.htm'>Visit W3Schools.com!</link>",
    ans2text: "<a href='/home.htm'>Visit W3Schools.com!</a>",
    ans3text: "<alink href='/home.htm'>Visit W3Schools.com!</alink>",
    ans4text: "<alink href='/home.htm/'>Visit W3Schools.com!</alink>",
    answer: "<a href='/home.htm'>Visit W3Schools.com!</a>",
  },
  {
    question: "Which of the following is a correct syntax for using an HTML attribute?",
    ans1text: "<img src('img_girl.jpg')>",
    ans2text: "<img src='img_girl.jpg'>",
    ans3text: "<img src('img_girl.jpg')",
    ans4text: "<img src:'img_girl.jpg'>",
    answer: "<img src='img_girl.jpg'>",
  },
  {
    question: "What is a correct way to add a background color to an HTML document?",
    ans1text: "<body style='background-color:pink;'/>",
    ans2text: "<body style='bgcolor:pink;'>",
    ans3text: "<body background-color='pink;'>",
    ans4text: "<body style='background-color:pink;'>",
    answer: "<body style='background-color:pink;'>",
  },
  {
    question: "What is another HTML element used when defining image maps?",
    ans1text: "The <area> element",
    ans2text: "The <map> element",
    ans3text: "The <content> element",
    ans4text: "The <shape> element",
    answer: "The <area> element",

  },
  {
    question: "#example {transform: (20deg);}",
    ans1text: "translate",
    ans2text: "rotate",
    ans3text: "scaleY",
    ans4text: "scaleX",
    answer: "rotate",

  },
  {
    question: "The class name is case sensitive",
    ans1text: "class",
    ans2text: "True",
    ans3text: "id",
    ans4text: "False",
    answer: "True",

  },
  {
    question: "What is the purpose of the @media rule in CSS?",
    ans1text: "To add animations to elements",
    ans2text: "To optimize CSS for faster loading",
    ans3text: "To define styles for different media types",
    ans4text: "To set styles for print media only",
    answer: "To define styles for different media types",

  },
  {
    question: "#example {word-wrap: ;}",
    ans1text: "break word",
    ans2text: "keep all",
    ans3text: "break all",
    ans4text: "normal",
    answer: "break word",
  },
  {
    question: "What is the default direction of a linear gradient in CSS?",
    ans1text: "Diagonal",
    ans2text: "Bottom to top",
    ans3text: "Left to right",
    ans4text: "Top to bottom",
    answer: "Top to bottom",
  },
  {
    question: "What is the equivalent RGBA value for the transparent keyword?",
    ans1text: "rgba(255,255,255,1)",
    ans2text: "rgba(0,0,0,1)",
    ans3text: "rgba(255,255,255,0)",
    ans4text: "rgba(0,0,0,0)",
    answer: "rgba(255,255,255,0)",
  },

  {
    question: "What is a CSS pseudo-class used for?",
    ans1text: "To select elements based on their content",
    ans2text: "To define a special state of an element",
    ans3text: "To define the color of an element",
    ans4text: "To create responsive designs",
    answer: "To define a special state of an element",
  },
  {
    question: "What does CSS stand for?",
    ans1text: "Creative style sheet",
    ans2text: "computer style sheet",
    ans3text: "cascading style sheet",
    ans4text: "colorful style sheet",
    answer: "cascading style sheet",
  },
  {
    question: "How do you display hyperlinks without an underline?",
    ans1text: "a{underline:none;}",
    ans2text: "a{text-decoration:underline-none;}",
    ans3text: "a{text-decoration:no-underline;}",
    ans4text: "a{text-decoration:none;}",
    answer: "a{text-decoration:none;}",
  },
  {
    question: "let x = 'Having fun?';Which one of the following statements returns 'fun'?",
    ans1text: "x.slice(7, 10)",
    ans2text: "x.slice(7)",
    ans3text: "x.slice(7, 9)",
    ans4text: "Both a & b",
    answer: "Both a & b",

  },
  {
    question: "let x = '10';let y = '20';let z = x + y;",
    ans1text: "1020",
    ans2text: "30",
    ans3text: "10 20",
    ans4text: "2010",
    answer: "1020",
  },
  {
    question: "===	equal to",
    ans1text: "equal value",
    ans2text: "equal value and equal type",
    ans3text: "equal type",
    ans4text: "not equal type",
    answer: "equal value and equal type",

  },
  {
    question: "let x = '10';let y = 20;let z = x + y;",
    ans1text: "1020",
    ans2text: "30",
    ans3text: "10 20",
    ans4text: "Noun of ab",
    answer: "1020",
  },
  {
    question: 'const person = {firstname: "John"age: 50};  consol log(person["age"])',
    ans1text: "50",
    ans2text: "Numbetr",
    ans3text: "Null",
    ans4text: "undefined",
    answer: "50",
  },
  {
    question: "What is a correct syntax for adding a new property to the Person object constructor?",
    ans1text: "Person.prototype.hometown = 'Roma';",
    ans2text: "Person.hometown = 'Roma';",
    ans3text: "new Person.hometown = 'Roma';",
    ans4text: "Person['hometown'] = 'Roma';",
    answer: "Person.prototype.hometown = 'Roma';",
  },
  {
    question: "It is common to use these object literals instead of new Object(), which ones?",
    ans1text: "()",
    ans2text: "{}",
    ans3text: "[]",
    ans4text: "({})",
    answer: "{}",
  },
  {
    question: "Which method can be used to check if a Set contains a specified value?",
    ans1text: "contains()",
    ans2text: "indexOf()",
    ans3text: "has()",
    ans4text: "inSet()",
    answer: "has()",
  },
  {
    question: "Which method returns an Iterator object with all the values in a Set?",
    ans1text: "all()",
    ans2text: "values()",
    ans3text: "items()",
    ans4text: "iterator()",
    answer: "values()",
  },
  {
    question: "What happens if you try to add a value that already exists?",
    ans1text: "An error will occur",
    ans2text: "The Set will not add the new value, but keep the first occurance",
    ans3text: "The Set will add the new value and delete the first occurance",
    ans4text: "None of the Above",
    answer: "The Set will not add the new value, but keep the first occurance",
  },
  {
    question: '<p id="demo">This is a demonstration.</p>',
    ans1text: 'document.getElementByName("p").innerHTML = "Hello World!";',
    ans2text: 'document.getElementByName("p").innerHTML = "Hello World!"; ',
    ans3text: 'document.getElementById("demo").innerHTML = "Hello World!";',
    ans4text: '#demo.innerHTML="Hello Word";',
    answer: 'document.getElementById("demo").innerHTML = "Hello World!";',

  },
  {
    question: "The external JavaScript file must contain the <script> tag.",
    ans1text: "True",
    ans2text: "False",
    ans3text: "Both a & b",
    ans4text: "None of the Above",
    answer: "False",

  },
  {
    question: 'How do you write "Hello World" in an alert box?',
    ans1text: 'alert("Hello World");',
    ans2text: 'msg("Hello World");',
    ans3text: 'alertBox("Hello World");',
    ans4text: 'msgBox("Hello World");',
    answer: 'alert("Hello World");',

  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    ans1text: "onclick",
    ans2text: "onmouseover",
    ans3text: "onmouseclick",
    ans4text: "onchange",
    answer: "onclick",
  },
  {
    question: "How do you declare a JavaScript variable?",
    ans1text: "var carName;",
    ans2text: "v carName;",
    ans3text: "variable carName;",
    ans4text: "Both a & b",
    answer: "var carName;",
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    ans1text: "+",
    ans2text: "-",
    ans3text: "=",
    ans4text: "*",
    answer: "=",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    ans1text: "Both the <head> section and the <body> section are correct",
    ans2text: "The <body> section",
    ans3text: "The <head> section",
    ans4text: "Both b & c",
    answer: "Both the <head> section and the <body> section are correct",
  },

  {
    question: "** equal to",
    ans1text: "Exponentiation",
    ans2text: "Multiplication",
    ans3text: "	Increment",
    ans4text: "Addition",
    answer: "Exponentiation",
  },
  {
    question: "% equal to",
    ans1text: "Exponentiation",
    ans2text: "Modulus",
    ans3text: "Modulus",
    ans4text: "Both b & c",
    answer: "Both b & c",
  },
  {
    question: "Variables created with the let keyword can never change their value.",
    ans1text: "True",
    ans2text: "False",
    ans3text: "declared",
    ans4text: "Both a & b",
    answer: "False",
  },
  {
    question: "isInteger(10.1)",
    ans1text: "true",
    ans2text: "false",
    ans3text: "10",
    ans4text: "1",
    answer: "false",

  },
  {
    question: "MAX_SAFE_INTEGER or MiN_SAFE_INTEGER",
    ans1text: "16 or -16",
    ans2text: "15 or 15",
    ans3text: "-16",
    ans4text: "16",
    answer: "16 or -16",
  },
  {
    question: "The typeof(Undefined)",
    ans1text: "Null",
    ans2text: "Undefined",
    ans3text: "Number",
    ans4text: "Object",
    answer: "Undefined",

  },
  {
    question: "If the result is negative?",
    ans1text: "a is sorted before b",
    ans2text: "b is sorted before a",
    ans3text: "Both a & b",
    ans4text: "Numeric Sort",
    answer: "a is sorted before b",

  },
  {
    question: "combining sort() and reverse(), you can sort an array?",
    ans1text: "increasing order",
    ans2text: "Alphabetic Sort",
    ans3text: "descending order",
    ans4text: "Numeric Sort",
    answer: "descending order",
  },
  {
    question: "What is the use of pop() method?",
    ans1text: "removes the last element",
    ans2text: "adds a new element",
    ans3text: "removes the first element",
    ans4text: "find array length",
    answer: "removes the last element",
  },
  {
    question: "Math.sign(4.7) return",
    ans1text: "4",
    ans2text: "5",
    ans3text: "1",
    ans4text: "7",
    answer: "1",
  },

  {
    question: "How does a For loop start?",
    ans1text: "for(i=0; i<=5; i++)",
    ans2text: "fori=1 to 5",
    ans3text: "for(i=0; i<=5)",
    ans4text: "for(i<=5; i++)",
    answer: "for(i=0; <=5; i++)",
  },
  {
    question: "Comparing two JavaScript objects always return?",
    ans1text: "false",
    ans2text: "true",
    ans3text: "object",
    ans4text: "string",
    answer: "false",
  },
  {
    question: "Math.random() returns a random number between?",
    ans1text: "0 & 1",
    ans2text: "1 & 10",
    ans3text: "less then 0",
    ans4text: "Both a & c",
    answer: "0 & 1",
  },
  {
    question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    ans1text: "if (i != 5)",
    ans2text: "if i <> 5",
    ans3text: "if (i <> 5)",
    ans4text: "if i =! 5 then",
    answer: "if (i != 5)",
  },
  {
    question: "How do you find the number with the highest value of x and y?",
    ans1text: "Math.max(x, y)",
    ans2text: "top(x, y)",
    ans3text: "Math.ceil(x,y)",
    ans4text: "ceil(x,y)",
    answer: "Math.max(x, y)",

  },
  {
    question: "How do you round the number 7.25, to the nearest integer?",
    ans1text: "Math.rnd(7.25)",
    ans2text: "Math.round(7.25)  ",
    ans3text: "round(7.25)",
    ans4text: "rnd(7.25)",
    answer: "Math.round(7.25)  ",

  },
  {
    question: "How does a WHILE loop start?",
    ans1text: "while (i <= 10; i++)",
    ans2text: "while (i <= 10)",
    ans3text: "while i = 1 to 10",
    ans4text: "Both a & b",
    answer: "while (i <= 10)",

  },
  {
    question: "Math.ceil(4.9) return",
    ans1text: "4",
    ans2text: "5",
    ans3text: "1",
    ans4text: "9",
    answer: "5",
  },
  {
    question: 'const d = new Date("2022-03-25") return;',
    ans1text: "Fri Mar 25 2022 05:00:00",
    ans2text: "Fri Feb 21 2025 18:00:09",
    ans3text: "Sat Feb 22 2025 10:10:11",
    ans4text: "None of the Above",
    answer: "Fri Mar 25 2022 05:00:00",
  },
  {
    question: "How to write an IF statement in JavaScript?",
    ans1text: "if i == 5 then",
    ans2text: "if (i == 5)",
    ans3text: "if i = 5",
    ans4text: "if i = 5 then",
    answer: "if (i == 5)",
  },

]
const question = document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent)
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");
console.log(option_a);
console.log(option_b);
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;


submit.addEventListener("click", () => {
  const checkedAns = document.querySelector('input[type="radio"]:checked')
  console.log(checkedAns);
  // console.log(checkedAns.nextElementSibling.textContent);
  if (checkedAns === null) {
    alert("Please select an answer");
  } else {
    if (checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer) {
      score++;
    }

    currentQuestion++;
    if (currentQuestion < quiz.length) {
      question.textContent = quiz[currentQuestion].question;
      option_a.textContent = quiz[currentQuestion].ans1text;
      option_b.textContent = quiz[currentQuestion].ans2text;
      option_c.textContent = quiz[currentQuestion].ans3text;
      option_d.textContent = quiz[currentQuestion].ans4text;
      checkedAns.checked = false;
    } else {
      alert("Your score is " + score + " out of " + quiz.length);
      location.reload();
    }

  }
});
