import {Component} from '@angular/core';
import {BikeStoreService} from "./bike-store.service";
import {Observable} from "rxjs";
import {IBike} from "./bike.model";
import {MatDialog} from "@angular/material/dialog";
import {BikeDialogMode, EditBikeDialogComponent} from "./edit-bike-dialog/edit-bike-dialog.component";
import {TimeService} from "../time/time.service";

@Component({
  selector: 'app-inventory',
  templateUrl: './bike-inventory.component.html',
  styleUrls: ['./bike-inventory.component.scss']
})
export class BikeInventoryComponent {

  bikes$: Observable<IBike[]>;
  date$: Observable<Date>;

  constructor(private store: BikeStoreService,
              private editDialog: MatDialog,
              private time: TimeService) {
    this.bikes$ = store.bikes$;
    this.date$ = this.time.getDate();
  }

  onAddBike() {
    const dialogRef = this.editDialog.open(EditBikeDialogComponent, {
      data: {
        mode: BikeDialogMode.create,
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
        mode: BikeDialogMode.edit,
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
