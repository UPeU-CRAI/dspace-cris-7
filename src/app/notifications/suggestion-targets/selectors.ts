import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { SuggestionTarget } from '../../core/notifications/models/suggestion-target.model';
import {
  suggestionNotificationsSelector,
  SuggestionNotificationsState,
} from '../notifications.reducer';
import { reciterSuggestionTargetStateSelector } from '../reciter-suggestions/selectors';
import { SuggestionTargetEntry } from '../reciter-suggestions/suggestion-targets/suggestion-targets.reducer';
import { SuggestionTargetState } from './suggestion-targets.reducer';
import { subStateSelector } from '../../submission/selectors';

/**
 * Returns the Reciter Suggestion Target state.
 * @function _getSuggestionTargetState
 * @param {AppState} state Top level state.
 * @return {SuggestionNotificationsState}
 */
const _getSuggestionTargetState = createFeatureSelector<SuggestionNotificationsState>('suggestionNotifications');

// Suggestion Targets selectors

/**
 * Returns the Suggestion Targets State.
 * @function suggestionTargetStateSelector
 * @return {SuggestionNotificationsState}
 */
export function suggestionTargetStateSelector(): MemoizedSelector<SuggestionNotificationsState, SuggestionTargetState> {
  return subStateSelector<SuggestionNotificationsState, SuggestionTargetState>(suggestionNotificationsSelector, 'suggestionTarget');
}

/**
 * Returns the Reciter Suggestion source state
 * @function reciterSuggestionTargetObjectSelector
 * @return {SuggestionTargetEntry}
 */
export function suggestionSourceSelector(source: string): MemoizedSelector<SuggestionNotificationsState, SuggestionTargetEntry> {
  return createSelector(suggestionTargetStateSelector(),(state: SuggestionTargetState) => state.sources[source]);
}

/**
 * Returns the Suggestion Targets list by source.
 * @function suggestionTargetObjectSelector
 * @return {SuggestionTarget[]}
 */
export function suggestionTargetObjectSelector(source: string): MemoizedSelector<SuggestionNotificationsState, SuggestionTarget[]> {
  return createSelector(suggestionSourceSelector(source), (state: SuggestionTargetEntry) => state.targets);
}

/**
 * Returns true if the Suggestion Targets are loaded.
 * @function isSuggestionTargetLoadedSelector
 * @return {boolean}
 */
export const isSuggestionTargetLoadedSelector = (source: string) => {
  return createSelector(suggestionSourceSelector(source), (state: SuggestionTargetEntry) => state?.loaded || false);
};

/**
 * Returns true if the deduplication sets are processing.
 * @function isSuggestionTargetProcessingSelector
 * @return {boolean}
 */
export const isSuggestionTargetProcessingSelector = (source: string) => {
  return createSelector(suggestionSourceSelector(source), (state: SuggestionTargetEntry) => state?.processing || false);
};

/**
 * Returns the total available pages of Reciter Suggestion Targets.
 * @function getSuggestionTargetTotalPagesSelector
 * @return {number}
 */
export const getSuggestionTargetTotalPagesSelector = (source: string) => {
  return createSelector(suggestionSourceSelector(source), (state: SuggestionTargetEntry) => state?.totalPages || 0);
};

/**
 * Returns the current page of Suggestion Targets.
 * @function getSuggestionTargetCurrentPageSelector
 * @return {number}
 */
export const getSuggestionTargetCurrentPageSelector = (source: string) => {
  return createSelector(suggestionSourceSelector(source), (state: SuggestionTargetEntry) => state?.currentPage || 0);
};

/**
 * Returns the total number of Suggestion Targets.
 * @function getSuggestionTargetTotalsSelector
 * @return {number}
 */
export const getSuggestionTargetTotalsSelector = (source: string) => {
  return createSelector(suggestionSourceSelector(source), (state: SuggestionTargetEntry) => state?.totalElements || 0);
};

/**
 * Returns Suggestion Targets for the current user.
 * @function getCurrentUserSuggestionTargetSelector
 * @return {SuggestionTarget[]}
 */
export const getCurrentUserSuggestionTargetsSelector = () => {
  return createSelector(reciterSuggestionTargetStateSelector(), (state: SuggestionTargetState) => state?.currentUserTargets || []);
};

/**
 * Returns whether or not the user has consulted their suggestions
 * @function getCurrentUserSuggestionTargetSelector
 * @return {boolean}
 */
export const getCurrentUserSuggestionTargetsVisitedSelector = () => {
  return createSelector(reciterSuggestionTargetStateSelector(), (state: SuggestionTargetState) => state?.currentUserTargetsVisited || false);
};
