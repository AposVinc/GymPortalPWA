import {Injectable} from '@angular/core';
import {Region} from '../domain/Region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  regions: Array<Region>;


  constructor() {
    this.regions = [
      {img: '/assets/img/region/abruzzo.png', name: 'abruzzo'},
      {img: '/assets/img/region/basilicata.png', name: 'basilicata'},
      {img: '/assets/img/region/calabria.png', name: 'calabria'},
      {img: '/assets/img/region/campania.png', name: 'campania'},
      {img: '/assets/img/region/emilia.png', name: 'emilia-romagna'},
      {img: '/assets/img/region/friuli.png', name: 'friuli'},
      {img: '/assets/img/region/lazio.png', name: 'lazio'},
      {img: '/assets/img/region/liguria.png', name: 'liguria'},
      {img: '/assets/img/region/lombardia.png', name: 'lombardia'},
      {img: '/assets/img/region/marche.png', name: 'marche'},
      {img: '/assets/img/region/molise.png', name: 'molise'},
      {img: '/assets/img/region/piemonte.png', name: 'piemonte'},
      {img: '/assets/img/region/puglia.png', name: 'puglia'},
      {img: '/assets/img/region/sardegna.png', name: 'sardegna'},
      {img: '/assets/img/region/sicilia.png', name: 'sicilia'},
      {img: '/assets/img/region/toscana.png', name: 'toscana'},
      {img: '/assets/img/region/trentino.png', name: 'trentino'},
      {img: '/assets/img/region/umbria.png', name: 'umbria'},
      {img: '/assets/img/region/valle.png', name: 'valle d\'aosta'},
      {img: '/assets/img/region/veneto.png', name: 'veneto'},
    ];
  }

  findAll(): Array<Region> {
    return this.regions;
  }
}
