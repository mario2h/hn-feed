import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from "@angular/core";

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatListModule, MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule, MatListModule, MatIconModule],
})
export class MaterialModule { }
