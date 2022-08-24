import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ServerComponent } from './server/server.component';

import { AlertComponent } from './alert/alert.component';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ServerChap5Component } from './server-chap5/server-chap5.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { HighlightDirective } from './highlight.directive';
import { BetterHighlightDirective } from './better-highlight.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AlertComponent,
    ServerChap5Component,
    CockpitComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    HighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
