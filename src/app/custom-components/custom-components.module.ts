import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnlAddToCartComponent } from './bnl-add-to-cart/bnl-add-to-cart.component';
import { ConfigModule } from '@spartacus/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BnlAddToCartComponent,
    BottomSheetComponent
  ],
  exports: [
    BnlAddToCartComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatBottomSheetModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductAddToCartComponent: {
          component: BnlAddToCartComponent
        }
      }
    })
  ]
})
export class CustomComponentsModule { }
