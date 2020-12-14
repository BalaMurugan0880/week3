function minMaxAvg(num1,num2,num3){
	var min = num1;
	var max= num1;
	var avg =(num1,num2,num3)/3;

	if(num1 < num2){
	if(num1 < num3){
	min=num1
	}else{
	min = num3
	}
	}else{
	if(num2 < num3){
	min = num2
	}
	else{
	min = num3
	}
	}

	if(num1 > num2){
	if(num1 > num3){
	max = num1;
	}
	else{
	max = num3;
	}
	}else{
	if(num2 > num3){
	max = num2
	}
	else{
	max = num3
	}
	}

	return[min, max, avg]
}

console.log(minMaxAvg(2,3,4))
console.log(minMaxAvg(4,0,2))
console.log(minMaxAvg(-1,3,-4))

//array
var scores = [80,90,88,70,60,78];
console.log(scores[0]);
console.log(scores[1]);

for (var i = 0; i < scores.length; i++){
	console.log(scores[i]);
}
console.log(scores.length);

scores.push(90);
console.log(scores.length);
console.log(scores);

//minmaxavg
function minMaxAvgArr(arr) {
    var max = arr[0];
    var min = arr[0];
    var avg = arr[0]; 
    sum = 0;
  
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        
    }
     avg = sum / arr.length; 
    return [max, min, avg]; 
}

console.log(minMaxAvgArr([111,101,121]));
console.log(minMaxAvgArr([20,10,32,100,9,-40,80,10]));
console.log(minMaxAvgArr([3,1,9,0,-3,2]));
