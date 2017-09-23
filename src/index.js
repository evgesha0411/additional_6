module.exports = function zeros(expression) {
  // your solution
 var arr = expression.split('*');
 var zeros = 0;
 var store = 0;
 var flag = false;
 for(var i = 0;i < arr.length;i++){
	var temp = null;
	
	var subArr = arr[i].split('');
	for(var j = 0; j < subArr.length; j++){
		if(subArr[j] === '!'){
			temp++;
		}
	}
	var numberToFact = parseInt(arr[i]);
	switch(temp){
		case 1: calculateOne(numberToFact);break;
		case 2: calculateTwo(numberToFact);break;
		
	}}
	 if(store!==0 && flag == true){
		zeros+=store;
		}
	return zeros;
	function calculateOne(numberToFact){
		 flag = true;
		zeros+=(Math.floor(numberToFact/5)+Math.floor(numberToFact/25));	
	}
	
	function calculateTwo(numberToFact){
		if(numberToFact%2==0){
			 flag = true;
			zeros+=(Math.floor(numberToFact/10) + Math.floor(numberToFact/50));
		} else {
			if(numberToFact>=95){
				store+=12;
			}else if(numberToFact>=85 && numberToFact<95){
					store+=11;
				}else  if(numberToFact>=75 && numberToFact < 85){
						store+=10;
					}else if(numberToFact>= 65 && numberToFact<75){
						store+=8;
					}else if(numberToFact>=55 && numberToFact<65){
						store+=7;
					}else if(numberToFact>=45 && numberToFact<55){
						store+=6;
					}else if(numberToFact>=35 && numberToFact < 45){
						store+=5;
					}else if(numberToFact>= 25 && numberToFact<35){
						store+=4;
					}else if(numberToFact>=15 && numberToFact<25){
						store+=2;
					}else if(numberToFact>= 5 && numberToFact < 15){
						store++;
					}
			
		}
		
	}
 }
 

