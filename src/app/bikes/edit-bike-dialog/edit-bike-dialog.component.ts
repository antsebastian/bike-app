import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IBike} from "../bike.model";
import {BikeStoreService} from "../bike-store.service";

export enum BikeDialogMode { 'create', 'edit'};

@Component({
  selector: 'app-edit-bike-dialog',
  templateUrl: './edit-bike-dialog.component.html',
  styleUrls: ['./edit-bike-dialog.component.scss']
})
export class EditBikeDialogComponent {
  bike!: IBike;
  title = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<EditBikeDialogComponent>,
    private store: BikeStoreService,
  ) {

    if (data) {

      if (data.mode == BikeDialogMode.create)
        this.title = 'Add bike';
      else this.title = 'Edit bike';

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
