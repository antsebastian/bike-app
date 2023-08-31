import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Bike, IBike} from "./bike.model";

@Injectable({
  providedIn: 'root'
})

/*
Minimum functionality.
- Ability to Create, Read, Update, Delete bikes
- View a list of bikes
- Display bike properties: description, rating, price, qty, type, etc. (a photo for bonus points)
- Connect to and display any API (your choice). Example: Display weather
*/

export class BikeStoreService {
  private static bikeCount = 0;
  private bikeCache = new BehaviorSubject<IBike[]>([]);
  bikes$ = this.bikeCache.asObservable();

  constructor() {
  }

  addBike(bike: IBike): void {
    BikeStoreService.bikeCount++;
    bike.id = BikeStoreService.bikeCount;
    const b = new Bike(bike);
    let bikes = this.bikeCache.getValue();
    bikes = [...bikes, b];
    this.bikeCache.next(bikes);
  }

  removeBike(bike: IBike): void {
    let bikes = this.bikeCache.getValue();
    const i = bikes.findIndex(b => b.id == bike.id);
    if (i > -1) {
      bikes.splice(i, 1);
    } else
      console.error(`removeBike ${bike.id} not found`);
  }

  updateBike(bike: IBike): void {
    let bikes = this.bikeCache.getValue();
    const i = bikes.findIndex(b => b.id == bike.id);
    if (i > -1) {
      bikes[i] = bike;
    } else
      console.error(`updateBike ${bike.id} not found`);
  }

  getBike(id: number): IBike | undefined {
    const bikes = this.bikeCache.getValue();
    const bike = bikes.find(b => b.id == id);
    if (!bike)
      console.error(`getBike ${id} not found`);
    return bike;
  }

  createBike(): IBike {
    return new Bike();
  }
}
