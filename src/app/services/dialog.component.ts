import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  id: string;
  desc: string;
  call: string;
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
  <h1 mat-dialog-title>{{data.id}}</h1>
  <p><em>{{data.call}}</em></p>
  <div mat-dialog-content>
    <p>{{data.desc}}</p>
  </div>
  <div mat-dialog-actions>
    <button mat-button (click)="onNoClick()">Ok</button>
  </div>
  `
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}