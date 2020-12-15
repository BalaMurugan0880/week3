var myString = "Asia Developer Academy";

console.log(myString.length);
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.charAt(6));
console.log(myString.indexOf('ev'));
console.log(myString.lastIndexOf('e'));
console.log(myString.substring(5,14));
console.log(myString.split(" "));

//first method
function findLongestWordLength(str) {
  var strSplit = str.split(' ');
  var longestWord = 0;
  
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
	longestWord = strSplit[i].length;
     
      
     }
  }
  return longestWord;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));



function reverseString(str){
	var answer ="";
	for(var i= 0; i<str.length; i++){
	answer +=str.charAt(str.length-i-1);
	}
	return answer;
}
console.log(reverseString("Hello World"));

var number = 12.3456

console.log(number.toPrecision(3));
console.log(number.toFixed(3));

console.log(Math.ceil(number));
console.log(Math.floor(number));
console.log(Math.round(number));

console.log(Math.random());

console.log(Math.ceil(Math.random() * 100));
