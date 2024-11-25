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