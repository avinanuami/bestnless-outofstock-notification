import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActiveCartService, CmsAddToCartComponent } from '@spartacus/core';
import { AddToCartComponent, CmsComponentData, CurrentProductService, ModalService } from '@spartacus/storefront';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-bnl-add-to-cart',
  templateUrl: './bnl-add-to-cart.component.html',
  styleUrls: ['./bnl-add-to-cart.component.scss']
})
export class BnlAddToCartComponent extends AddToCartComponent implements OnInit {

  constructor(
    private _bottomSheet: MatBottomSheet,
    modalService: ModalService,
    currentProductService: CurrentProductService,
    cd: ChangeDetectorRef,
    activeCartService: ActiveCartService,
    component?: CmsComponentData<CmsAddToCartComponent>) {
    super(modalService, currentProductService, cd, activeCartService, component);
  }

  ngOnInit(): void {}

  openBS() {
    const bottomSheetRef = this._bottomSheet.open(BottomSheetComponent, {
      ariaLabel: 'Share on social media'
    });
  }
}
