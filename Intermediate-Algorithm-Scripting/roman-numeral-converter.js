//conversion is limited to numbers from 1 to 3999

function convertToRoman(num) {
	var newNum = num.toString().split("").map(Number);
	var numberArr = [];
	var numTen = newNum.length-1;
	for(var i=0; i < newNum.length; i++) {
		numberArr.push(newNum[i]*Math.pow(10,numTen));
		numTen--;
	}
	var romanNumbers = {
	   1: "I",
	   2: "II",
	   3: "III",
	   4: "IV",
	   5: "V",
	   6: "VI",
	   7: "VII",
	   8: "VIII",
	   9: "IX",
	   10: "X",
	   20: "XX",
	   30: "XXX",
	   40: "XL",
	   50: "L",
	   60: "LX",
	   70: "LXX",
	   80: "LXXX",
	   90: "XC",
	   100: "C",
	   200: "CC",
	   300: "CCC",
	   400: "CD",
	   500: "D",
	   600: "DC",
	   700: "DCC",
	   800: "DCCC",
	   900: "CM",
	   1000: "M",
	   2000: "MM",
	   3000: "MMM"
	};
	for (var j=0; j<numberArr.length; j++){
		if(romanNumbers[numberArr[j]] !== undefined){
			numberArr[j] = romanNumbers[numberArr[j]];
		}
		if(numberArr[j] === 0){
			numberArr[j] = "";
		}
	}
	num = numberArr.join("");
	return num;
}

convertToRoman(43);
