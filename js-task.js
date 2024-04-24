// 6.10.1

const promptNumber = prompt('Введите любое число');
+promptNumber;
let squareNumber = promptNumber ** 2;
let cubeNumber = promptNumber ** 3;
alert(`Введенное число - ${promptNumber || 0}
Квадрат числа - ${squareNumber}
Куб числа - ${cubeNumber}`);

// 6.10.2

const promptText = prompt('Введите промокод');
if (promptText.toLowerCase() == 'скидка') {
  alert('Промокод применён');
} else {
  alert('Промокод не работает');
};

// 6.10.3

const userName = prompt('Введите ваше имя:');
const birthYear = parseInt(prompt('Введите ваш год рождения:'));
if (!isNaN(birthYear)) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  alert(`${userName}: ${age}`);
} else {
  alert('Год должен быть числом!');
}

// 6.10.4

const userName = prompt('Введите ваше имя:');
const birthYear = parseInt(prompt('Введите ваш год рождения:'));
if (!isNaN(birthYear) && userName !== '') {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  const residue = age % 10;
  let years;
  if (residue === 1) {
    years = 'год';
  } else if (residue >= 2 && residue <= 4) {
    years = 'года';
  } else {
    years = 'лет';
  }
  alert(`${userName}: ${age} ${years}`);
} else {
  alert('Год не число или пустое имя');
}

// 6.10.5

const userAge = parseInt(prompt('Введите ваш возраст:'));

if (isNaN(userAge)) {
  alert('Введите число!');
} else {
  let maxAmount = 0;
  
  if (userAge >= 18 && userAge <= 21) {
    maxAmount = 50000;
  } else if (userAge >= 22 && userAge <= 35) {
    maxAmount = 400000;
  } else if (userAge >= 36 && userAge <= 65) {
    maxAmount = 1000000;
  }
  
  if (maxAmount > 0) {
    const creditAmount = parseInt(prompt(`Мы можем вам выдать максимум ${maxAmount}.
    Введите сумму кратную 1000.`));
  
    if (isNaN(creditAmount)) {
      alert('Введите число!');
    } else if (creditAmount === 0 || creditAmount > maxAmount) {
      alert('Видимо вам кредит не нужен. Всего доброго!');
    } else {
      const residue = creditAmount % 1000;
      if (residue === 0) {
        alert(`Мы можем вам выдать ${creditAmount}`);
      } else {
        alert(`Вы ввели значение не кратное 1000. Мы можем выдать ${creditAmount - residue}`);
      }
    }
  } else {
    alert('Мы не можем вам выдать кредит.');
  }
}

// 7.6.1

function isPalindrome(word) {
    const lowerCaseWord = word.toLowerCase();
    const letters = lowerCaseWord.split('');
    const reversedLetters = [...letters].reverse();
    return letters.join('') === reversedLetters.join('');
}
  
const word = prompt('Введите слово:');
    if (isPalindrome(word)) {
        console.log(`Слово "${word}" является палиндромом.`);
    } else {
        console.log(`Слово "${word}" не является палиндромом.`);
}

// 7.6.2

const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];
const uniqueSet = new Set(arr);
const uniqueArr = Array.from(uniqueSet);
console.log(uniqueArr);

// 7.6.3

const number = parseInt(prompt('Введите число:'));
const array = [];
for (let i = 0; i <= number; i += 1) {
  array.push(i);
}
console.log(array);

// 7.6.4

for (let i = 0; i < 3; i++) {
    let row = '';
    for (let j = 0; j < 3; j++) {
        if ((i + j) % 2 === 0) {
            row += 'x ';
        } else {
            row += 'o ';
        }
    }
    console.log(row);
}

// 7.6.5

const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
  };
  
  const arrValues = [];
  for (let key in obj) {
      if (Array.isArray(obj[key])) {
          arrValues.push(...obj[key]);
      } else {
          arrValues.push(obj[key]);
      }
  }
  
  console.log(arrValues);