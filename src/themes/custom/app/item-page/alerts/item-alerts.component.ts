import { Component } from '@angular/core';
import { ItemAlertsComponent as BaseComponent } from '../../../../../app/item-page/alerts/item-alerts.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { AlertComponent } from '../../../../../../libs/shared/ui/src/lib/alert/alert.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'ds-item-alerts',
    // templateUrl: './item-alerts.component.html',
    templateUrl: '../../../../../app/item-page/alerts/item-alerts.component.html',
    // styleUrls: ['./item-alerts.component.scss'],
    styleUrls: ['../../../../../app/item-page/alerts/item-alerts.component.scss'],
    standalone: true,
    imports: [NgIf, AlertComponent, RouterLink, TranslateModule]
})
export class ItemAlertsComponent extends BaseComponent {
}
