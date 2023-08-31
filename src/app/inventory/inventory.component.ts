import {Component} from '@angular/core';
import {BikeStoreService} from "./bike-store.service";
import {Observable} from "rxjs";
import {IBike} from "./bike.model";
import {MatDialog} from "@angular/material/dialog";
import {EditBikeDialogComponent} from "./edit-bike-dialog/edit-bike-dialog.component";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {

  bikes$: Observable<IBike[]>;

  constructor(private store: BikeStoreService,
              private editDialog: MatDialog) {
    this.bikes$ = store.bikes$;
  }

  addBike() {
    const dialogRef = this.editDialog.open(EditBikeDialogComponent, {
      data: {
        mode: 'create',
      }
    });
    //  const snack = this.snackBar.open('Snack bar open before dialog');

    dialogRef.afterClosed().subscribe((bike: IBike) => {
      if (bike) {
        this.store.addBike(bike);
      } else {
        console.log('cancelled');
      }
    });
  }

  onEditBike(bike: IBike) {
    const dialogRef = this.editDialog.open(EditBikeDialogComponent, {
      data: {
        mode: 'edit',
        bike: {...bike}
      }
    });
    //  const snack = this.snackBar.open('Snack bar open before dialog');

    dialogRef.afterClosed().subscribe((bike: IBike) => {
      if (bike) {
        this.store.updateBike(bike);
      } else {
        console.log('cancelled');
      }
    });
  }

  onRemoveBike(bike: IBike) {
    this.store.removeBike(bike);
  }
}
