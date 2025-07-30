let changeText;
if(process.argv[2]){
	changeText = process.argv[2]
}
else {
	changeText = "Hello World"
}
console.log(changeText);