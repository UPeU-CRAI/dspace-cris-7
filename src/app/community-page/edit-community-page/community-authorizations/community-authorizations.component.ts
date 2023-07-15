import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { RemoteData } from '../../../core/data/remote-data';
import { DSpaceObject } from '../../../core/shared/dspace-object.model';
import { AsyncPipe } from '@angular/common';
import { ResourcePoliciesComponent } from '../../../shared/resource-policies/resource-policies.component';

@Component({
    selector: 'ds-community-authorizations',
    templateUrl: './community-authorizations.component.html',
    standalone: true,
    imports: [ResourcePoliciesComponent, AsyncPipe]
})
/**
 * Component that handles the community Authorizations
 */
export class CommunityAuthorizationsComponent<TDomain extends DSpaceObject> implements OnInit {

  /**
   * The initial DSO object
   */
  public dsoRD$: Observable<RemoteData<TDomain>>;

  /**
   * Initialize instance variables
   *
   * @param {ActivatedRoute} route
   */
  constructor(
    private route: ActivatedRoute
  ) {
  }

  /**
   * Initialize the component, setting up the community
   */
  ngOnInit(): void {
    this.dsoRD$ = this.route.parent.parent.data.pipe(first(), map((data) => data.dso));
  }
}
