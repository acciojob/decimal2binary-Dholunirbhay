function decimalToBinary(num) {
  //Write you code here

	let binary = "";

	if(num==0){
		return "0";
	}
	
	
	while(num>0){
		let digit = num%2;
		
		binary =digit + binary;
		num = Math.floor(num/2);
	}
	return binary;
}

window.decimalToBinary = decimalToBinary;
