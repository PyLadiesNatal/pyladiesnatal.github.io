function mask(str,textbox,tipo){
	if (tipo == 'cpf'){
		var loc = '3,7,11';
		var delim = '.,.,-';

		var locs = loc.split(',');
		var delims = delim.split(',');

		for (var i = 0; i <= locs.length; i++){
			for (var k = 0; k <= str.length; k++){
			 	if (k == locs[i]){
			  		if (str.substring(k, k+1) != delims[i]){
			    		str = str.substring(0,k) + delims[i] + str.substring(k,str.length);
			 	 	}
			 	}
			}
		}
		textbox.value = str;
	}

	if (tipo == 'email'){
		var reg = '@,.com';
		var regs = reg.split(',');
		var check_1 = 0;
		var check_2 = 1;
		var array_str = str.split('@');
		if(array_str.length < 2){
			check_1 = 1;
		}
		else{
			array_str[1] = array_str[1].split('.');
			for(var i = 0; i < array_str[1].length; i++){
				if(array_str[1][i] == 'com'){
					check_2 = 0;
				}
			}
		}
		if(check_1 ||  check_2){
			alert('Endereço de email inválido (exemplo@email.com)');
		}		

	}	
}
