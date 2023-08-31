export type BikeType = 'electronic' | 'manual'

export interface IBike {
  id?: number;
  model?: string;
  description?: string;
  rating?: number;
  price?: number;
  qty?: number;
  type?: BikeType;
  imageSrc?: string;
}

export class Bike implements IBike {
  id?: number;
  model?: string;
  description?: string;
  rating?: number;
  price?: number;
  qty?: number;
  type?: BikeType;
  imageSrc?: string;

  constructor(a: Partial<Bike> = {}) {
    this.id = a.id;
    this.model = a.model || 'Eahora 250A';
    this.description = a.description || `Lorem ipsum dolor sit amet, quo id altera minimum appareat. Sale volumus periculis cum no, viderer reprimique pro an. An agam invenire constituam ius, duo stet cibo prompta ea, ne brute noluisse nec. Vim molestie interesset in, vim inimicus aliquando ex. Ut propriae percipit est. An nisl nominavi reprimique mel.`;
    this.rating = a.rating || 4;
    this.price = a.price || 1000.00;
    this.qty = a.qty || 20;
    this.type = a.type || 'electronic';
  }
}
