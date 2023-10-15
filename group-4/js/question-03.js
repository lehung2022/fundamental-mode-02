//#Source https://bit.ly/2neWfJ2 
const dropWhile = (arr, func) => {
	while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
	return arr;
  };
  
  console.log(dropWhile([1, 2, 3, 4], n => n >= 3));
  