var isVarified = true;
var isLoggedIn = true;
let hasPaymentToken = true;
let isGuest = true;

if(isVarified && isLoggedIn && hasPaymentToken){
	console.log("Welcome to paid courses");
}
else if(isVarified && isGuest){
	console.log("Welcome to free previews");
}else{
	console.log("Contact Admin");
}

isGuest = false;
if(isVarified || isGuest){
	console.log("Welcome to free previews");
}else{
	console.log("Contact Admin");
}

if(!isVarified && !isLoggedIn && !hasPaymentToken){
	console.log("Welcome to paid courses");
}
else if(isVarified && !isGuest){
	console.log("Welcome to free previews");
}else{
	console.log("Contact Admin");
}