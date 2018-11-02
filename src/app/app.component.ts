import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  public val1:number;
  public val2:string;
  public rta:Array<string>;

  public operacion(n:number) {
    this.val2 = ''
    this.numeroNegativo();
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

  public numeroNegativo(){
    if(this.val1 <= -1){
      this.val2 = 'Porfavor ingrese un numero positivo'
    } else if(this.val1 == 0){
      this.val2 = 'el cero no cuenta'
    }
  }

}
