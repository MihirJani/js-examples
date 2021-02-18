if(true){
	console.log("I am in If block") //This part will be printed
}else{
	console.log("I am in Else block") //This part will not printed
}

if(false){
	console.log("I am in If block") //This part will not printed
}else{
	console.log("I am in Else block") //This part will be printed
}

if(false){
	console.log("I am in If block") //This part will not printed
}
else if(true){
	console.log("I am in ElseIf block") //This part will be printed
}
else{
	console.log("I am in Else block") //This part will not printed
}


var whoIsHere = 'user'
if(whoIsHere === 'user' ){
	console.log('Welcome ' +whoIsHere+ " to our block"); // This will execute
	console.log('You can view our courses'); // This will execute
}else if(whoIsHere === 'teacher'){
	console.log('Welcome ' +whoIsHere+ " to your account");
	console.log('You have access to your courses');
}else{
	console.log('Please verify your account');
}

var whoIsHere = 'teacher'
if(whoIsHere === 'user' ){
	console.log('Welcome ' +whoIsHere+ " to our block");
	console.log('You can view our courses');
}else if(whoIsHere === 'teacher'){
	console.log('Welcome ' +whoIsHere+ " to your account"); //This will execute
	console.log('You have access to your courses'); //This will execute
}else{
	console.log('Please verify your account');
}

var whoIsHere = 'root'
if(whoIsHere === 'user' ){
	console.log('Welcome ' +whoIsHere+ " to our block");
	console.log('You can view our courses');
}else if(whoIsHere === 'teacher'){
	console.log('Welcome ' +whoIsHere+ " to your account");
	console.log('You have access to your courses');
}else{
	console.log('Please verify your account'); //This will execute
}


// ASSIGNMENT GRADING SYSTEM
var marks=3

if(marks === 10){
	console.log('Your marks is : ' +marks+ " Amazing");
}
else if(marks === 5){
	console.log('Your marks is : ' +marks+ " Good");
}
else if(marks === 3){
	console.log('Your marks is : ' +marks+ " Poor");
}
else if(marks == 0){ // Here we have used only 2 time =(equals to) opertor which works same as 3 times equals to
	console.log('Your marks is : ' +marks+ " Failed");
}
else{
	console.log('Enter Valid marks like  10 - 5 - 3 - 0');
}

//With Ranging 
var marks = 10

if(marks > 9){
	console.log('Your marks is : ' +marks+ " Amazing");
}
else if(marks > 4){
	console.log('Your marks is : ' +marks+ " Good");
}
else if(marks > 2){
	console.log('Your marks is : ' +marks+ " Poor");
}
else if(marks == 0){ // Here we have used only 2 time =(equals to) opertor which works same as 3 times equals to
	console.log('Your marks is : ' +marks+ " Failed");
}
else{
	console.log('Enter Valid marks like  10 - 5 - 3 - 0');
}
