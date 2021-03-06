import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  /*add(a,b){
    return a + b;
  }*/

  public rta:Array<string>;
  operacion(n:number) {
  	var
  		values = [1, 5, 10, 50, 100, 500, 1000],
  		letras = ['I', 'V', 'X', 'L', 'C', 'D', 'M'],
  		res = [],
  		num, letra, val, pos, insert

  	for(var i = 6; num = values[i], letra = letras[i]; i--) {
  		if(n >= num) {
  			var r = Math.floor(n / num);
  			n -= r * num;

  			if(r < 4){
  				while(r--){
  					res.push(letra);
  				}
  			} else {
  				val = res.pop();
  				pos = (val ? letras.indexOf(val) : i) + 1;
  				insert = letra + (letras[pos] || 'M');
  				res.push(insert);
  			}
  		} else {
  			res.push('');
  		}
  	}
    this.rta = res;
    return this.rta;
  }
}
