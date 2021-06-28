import { createSelector } from '@ngrx/store'
import { State } from './score-reducer'
const state = (_state: State) => _state
export const homeScorese = createSelector(state, (stateHome) => stateHome.home)
