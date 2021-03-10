import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculoPeso'
})
export class CalculoPesoPipe implements PipeTransform {

  transform(value: number, porcentaje: number): string {
    var calculo = (value * porcentaje) / 100;
    return calculo +' Kg';
  }

}
