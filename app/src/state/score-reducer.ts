import { Action, createReducer, on } from '@ngrx/store'
import { awayScore, homeScore, resetScore } from './score-action'

export interface State {
  home: number
  away: number
}
export const initialState: State = {
  home: 0,
  away: 0,
}
export const scoreboardReducer = createReducer(
  initialState,
  on(homeScore, (state) => ({
    ...state,
    home: state.home + 1,
  })),
  on(awayScore, (state) => ({
    ...state,
    away: state.away + 1,
  })),
)

export function reducer(state: State | undefined, action: Action) {
  return scoreboardReducer(state, action)
}
