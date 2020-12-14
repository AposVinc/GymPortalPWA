import {Injectable} from '@angular/core';
import {Region} from '../domain/Region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  regions: Array<Region>;


  constructor() {
    this.regions = [
      {img: '/assets/img/abruzzo.png', name: 'abruzzo'},
      {img: '/assets/img/basilicata.png', name: 'basilicata'},
      {img: '/assets/img/calabria.png', name: 'calabria'},
      {img: '/assets/img/campania.png', name: 'campania'},
      {img: '/assets/img/emilia.png', name: 'emilia'},
      {img: '/assets/img/friuli.png', name: 'friuli'},
      {img: '/assets/img/lazio.png', name: 'lazio'},
      {img: '/assets/img/liguria.png', name: 'liguria'},
      {img: '/assets/img/lombardia.png', name: 'lombardia'},
      {img: '/assets/img/marche.png', name: 'marche'},
      {img: '/assets/img/molise.png', name: 'molise'},
      {img: '/assets/img/piemonte.png', name: 'piemonte'},
      {img: '/assets/img/puglia.png', name: 'puglia'},
      {img: '/assets/img/sardegna.png', name: 'sardegna'},
      {img: '/assets/img/sicilia.png', name: 'sicilia'},
      {img: '/assets/img/toscana.png', name: 'toscana'},
      {img: '/assets/img/trentino.png', name: 'trentino'},
      {img: '/assets/img/umbria.png', name: 'umbria'},
      {img: '/assets/img/valle.png', name: 'valle'},
      {img: '/assets/img/veneto.png', name: 'veneto'},
    ];
  }

  findAll(): Array<Region> {
    return this.regions;
  }
}
