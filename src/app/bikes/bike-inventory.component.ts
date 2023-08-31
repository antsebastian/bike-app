import {Component} from '@angular/core';
import {BikeStoreService} from "./bike-store.service";
import {Observable} from "rxjs";
import {IBike} from "./bike.model";
import {MatDialog} from "@angular/material/dialog";
import {EditBikeDialogComponent} from "./edit-bike-dialog/edit-bike-dialog.component";

@Component({
  selector: 'app-inventory',
  templateUrl: './bike-inventory.component.html',
  styleUrls: ['./bike-inventory.component.scss']
})
export class BikeInventoryComponent {

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

    dialogRef.afterClosed().subscribe((bike: IBike) => {
      if (bike) {
        this.store.addBike(bike);
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

    dialogRef.afterClosed().subscribe((bike: IBike) => {
      if (bike) {
        this.store.updateBike(bike);
      }
    });
  }

  onRemoveBike(bike: IBike) {
    this.store.removeBike(bike);
  }
}
