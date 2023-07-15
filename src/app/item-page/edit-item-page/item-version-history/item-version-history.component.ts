import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RemoteData } from '../../../core/data/remote-data';
import { Item } from '../../../core/shared/item.model';
import { map } from 'rxjs/operators';
import { getFirstSucceededRemoteData } from '../../../core/shared/operators';
import { ActivatedRoute } from '@angular/router';
import { AlertType } from '@dspace/shared/ui';
import { ItemVersionsComponent } from '../../versions/item-versions.component';
import { NgIf, AsyncPipe } from '@angular/common';
import { VarDirective } from '../../../shared/utils/var.directive';

@Component({
    selector: 'ds-item-version-history',
    templateUrl: './item-version-history.component.html',
    standalone: true,
    imports: [VarDirective, NgIf, ItemVersionsComponent, AsyncPipe]
})
/**
 * Component for listing and managing an item's version history
 */
export class ItemVersionHistoryComponent {
  /**
   * The item to display the version history for
   */
  itemRD$: Observable<RemoteData<Item>>;

  /**
   * The AlertType enumeration
   * @type {AlertType}
   */
  AlertTypeEnum = AlertType;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.itemRD$ = this.route.parent.parent.data.pipe(map((data) => data.dso)).pipe(getFirstSucceededRemoteData()) as Observable<RemoteData<Item>>;
  }
}
