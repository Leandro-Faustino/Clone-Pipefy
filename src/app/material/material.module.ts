import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';

const MaterialComponents = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatTooltipModule,
  DragDropModule
]

@NgModule({
  imports: [
    MaterialComponents

  ],
  exports: [
    MaterialComponents
  ],
})
export class MaterialModule { }
