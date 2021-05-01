//Take the arguments
var myArgs = process.argv.slice(2);

//Create the new array that will hold the letters
var strArr = [];

var i;
var j;

//For loop to iterate between arguments
for (i = 0; i < myArgs.length; i ++) {
	//Make the array not null so that concat won't run an error
	strArr[i] = "";
	//For loop to iterate between the amount of characters
	for (j = 0; j < myArgs[i].toString().length; j ++) {
		//Switch statements to write each number. If it is not a number tell the user N/A
		switch(myArgs[i].toString().charAt(j)) {
			case '1':
				strArr[i] = strArr[i].concat("One");
				break;
			case '2':
				strArr[i] = strArr[i].concat("Two");
				break;
			case '3':
				strArr[i] = strArr[i].concat("Three");
				break;
			case '4':
				strArr[i] = strArr[i].concat("Four");
				break;
			case '5':
				strArr[i] = strArr[i].concat("Five");
				break;
			case '6':
				strArr[i] = strArr[i].concat("Six");
				break;
			case '7':
				strArr[i] = strArr[i].concat("Seven");
				break;
			case '8':
				strArr[i] = strArr[i].concat("Eight");
				break;
			case '9':
				strArr[i] = strArr[i].concat("Nine");
				break;
			case '0':
				strArr[i] = strArr[i].concat("Zero");
				break;
			default:
				strArr[i] = strArr[i].concat("(N/A)");
				break;
		}
	}
	//Print out the letters
	process.stdout.write(strArr[i]);
	//Add a comma, but not at the end
	if (i != myArgs.length - 1) {
		process.stdout.write(",");
	}
}
