import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BikeInventoryComponent} from './bikes/bike-inventory.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule, Routes} from "@angular/router";
import {EditBikeDialogComponent} from './bikes/edit-bike-dialog/edit-bike-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'bike-inventory'
  },
  {
    path: 'bike-inventory',
    component: BikeInventoryComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BikeInventoryComponent,
    EditBikeDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatTooltipModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
