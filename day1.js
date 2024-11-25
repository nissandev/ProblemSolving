// 1. Given an array off integers, replace all the accurrences of element to replace with the subtranstion of element

const intArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const targetedReplaceElement = 1;
const replaceByElement = 3;

const replacerFunction = (
  intArray,
  targetedReplaceElement,
  replaceByElement
) => {
  const updatedArray = intArray?.map((element) => {
    return element === targetedReplaceElement ? replaceByElement : element;
  });
  return updatedArray;
};

// console.log(replacerFunction([2,4,2,4],2,1))

// 2. Write a function that will returns the sum of two numbers. and write another function that will return the sum # of numbers

const sumNumbers = (num1, num2) => {
  return num1 + num2;
};

// console.log(sumNumbers(5,5))

const sumAllNumbers = (...numbers) => {
  console.log(numbers);
  return numbers?.reduce((sumAllNumbers, num) => {
    return sumAllNumbers + num;
  });
};

//   console.log(sumAllNumbers(1, 2, 1, 6));

// 3 write a function that will add  picture's border

const pictures = ["abc", "def", "hlel"];

const addBorder = (pictures) => {
  let border = "*".repeat(pictures[0]?.length + 2);

  pictures?.unshift(border);
  pictures?.push(border);

  pictures?.forEach((picture, index) => {
    if (index > 0 && index < pictures.length - 1) {
      pictures[index] = "*".concat(picture, "*");
    }
  });
  return pictures;
};

// console.log(addBorder(pictures))

//  4 write a function that will return true or false if sequenctially true otherwise false

const checkSequencial = (arr) => {
  let result = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      result = false;
      break;
    }
  }

  return result;
};

// console.log(checkSequencial([1,2,3,4,5,6,7,8,10,4]))

//   write a function that will sum the all prime numbers and including the provided number

const sumPrimeNumbers = (num) => {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        // If i is divisible by any number between 2 and i-1, it's not a prime number. Otherwise, it's a prime number.
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      sum += i;
    }
  }
  return sum;
};

console.log(sumPrimeNumbers(10));
