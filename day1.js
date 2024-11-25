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
