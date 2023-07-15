import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayContadorComponent } from './contador/display-contador/display-contador.component';
import { StoreModule } from '@ngrx/store';
import { ContadorComponent } from './contador/contador.component';
import { contadorReducer } from './contador/contador.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { GridComponent } from './todos/todos.component';
import { gridReducer } from './todos/todos.state';
import { HomeComponent } from './home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { GridEffectsService } from './todos/todos.state.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DisplayContadorComponent,
    ContadorComponent,
    GridComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ contador: contadorReducer, grid: gridReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([ GridEffectsService ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
