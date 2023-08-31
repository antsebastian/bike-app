import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IBike} from "../bike.model";
import {BikeStoreService} from "../bike-store.service";

export type BikeDialogMode = 'create' | 'edit'

@Component({
  selector: 'app-edit-bike-dialog',
  templateUrl: './edit-bike-dialog.component.html',
  styleUrls: ['./edit-bike-dialog.component.css']
})
export class EditBikeDialogComponent {
  mode: BikeDialogMode = 'create';
  bike!: IBike;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<EditBikeDialogComponent>,
    private store: BikeStoreService
  ) {

    if (data) {
      this.mode = data.mode || 'create';
      this.bike = data.bike || this.store.createBike();
    }
  }

  onOK() {
    this.dialogRef.close(this.bike);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
