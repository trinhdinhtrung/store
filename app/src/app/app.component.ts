import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { State } from '../state/score-reducer'
import { homeScore } from '../state/score-action'
import { homeScorese } from 'src/state/selector'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public data = {
    home: 0,
    away: 0,
  } as State
  constructor(private readonly store: Store<State>) {}
  public countHome() {
    this.store.dispatch(homeScore())
    const a = this.store.select<State>((state) => state)
    a.subscribe((val) => {
      console.log(val)
      this.data = val
    })
    this.store.select(homeScorese).subscribe((val) => {
      console.log(val)
    })
  }
}
