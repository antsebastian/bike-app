
export interface IBike {
  id?: number;
  model?: string;
  description?: string;
  rating?: number;
  price?: number;
  qty?: number;
  imageSrc?: string;
}

export class Bike implements IBike {
  id?: number;
  model?: string;
  description?: string;
  rating?: number;
  price?: number;
  qty?: number;
  imageSrc?: string;

  constructor(a: Partial<Bike> = {}) {
    this.id = a.id;
    this.model = a.model;
    this.description = a.description;
    this.rating = a.rating;
    this.price = a.price;
    this.qty = a.qty;
    this.imageSrc = a.imageSrc;

  }
}
