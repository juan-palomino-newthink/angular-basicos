import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan América'];
  public heroeBorrado?: string;

  borrarHeroe(heroe: number){
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
