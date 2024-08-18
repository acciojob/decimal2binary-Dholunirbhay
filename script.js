function decimalToBinary(num) {
  //Write you code here

	let binary = 0;

	while(num>0){
		let digit;
		digit = num%2;
		binary =(binary*10) + digit;
		num = num/2;
	}
	return binary;
}

window.decimalToBinary = decimalToBinary;
