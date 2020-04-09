import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { StoreActionTypes } from '../../store.actions';
import { AddToObjectCacheAction, ObjectCacheAction, ObjectCacheActionTypes, ResetObjectCacheTimestampsAction } from './object-cache.actions';
import { hasValue } from '../../shared/empty.util';

@Injectable()
export class ObjectCacheEffects {

  /**
   * When the store is rehydrated in the browser, set all cache
   * timestamps to 'now', because the time zone of the server can
   * differ from the client.
   *
   * This assumes that the server cached everything a negligible
   * time ago, and will likely need to be revisited later
   */
  @Effect() fixTimestampsOnRehydrate = this.actions$
    .pipe(ofType(StoreActionTypes.REHYDRATE),
      map(() => new ResetObjectCacheTimestampsAction(new Date().getTime()))
    );

  constructor(private actions$: Actions) {
  }

}
