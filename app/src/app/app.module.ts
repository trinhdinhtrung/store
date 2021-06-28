import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { StoreModule } from '@ngrx/store'
import { scoreboardReducer } from 'src/state/score-reducer'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreModule.forRoot({re:scoreboardReducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
