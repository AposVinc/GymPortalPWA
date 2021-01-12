import {Injectable} from '@angular/core';
import {Region} from '../../domain/Region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  regions: Array<Region>;


  constructor() {
    this.regions = [
      {img: '/assets/img/region/abruzzo.png', name: 'Abruzzo'},
      {img: '/assets/img/region/basilicata.png', name: 'Basilicata'},
      {img: '/assets/img/region/calabria.png', name: 'Calabria'},
      {img: '/assets/img/region/campania.png', name: 'Campania'},
      {img: '/assets/img/region/emilia.png', name: 'Emilia-Romagna'},
      {img: '/assets/img/region/friuli.png', name: 'Friuli-Venezia Giulia'},
      {img: '/assets/img/region/lazio.png', name: 'Lazio'},
      {img: '/assets/img/region/liguria.png', name: 'Liguria'},
      {img: '/assets/img/region/lombardia.png', name: 'Lombardia'},
      {img: '/assets/img/region/marche.png', name: 'Marche'},
      {img: '/assets/img/region/molise.png', name: 'Molise'},
      {img: '/assets/img/region/piemonte.png', name: 'Piemonte'},
      {img: '/assets/img/region/puglia.png', name: 'Puglia'},
      {img: '/assets/img/region/sardegna.png', name: 'Sardegna'},
      {img: '/assets/img/region/sicilia.png', name: 'Sicilia'},
      {img: '/assets/img/region/toscana.png', name: 'Toscana'},
      {img: '/assets/img/region/trentino.png', name: 'Trentino'},
      {img: '/assets/img/region/umbria.png', name: 'Umbria'},
      {img: '/assets/img/region/valle.png', name: 'Valle d\'Aosta'},
      {img: '/assets/img/region/veneto.png', name: 'Veneto'},
    ];
  }

  findAll(): Array<Region> {
    return this.regions;
  }
}
