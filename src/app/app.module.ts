import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { todosReducer } from './modules/todos/todos.state';
import { EffectsModule } from '@ngrx/effects';
import { GridEffectsService } from './modules/todos/todos.state.effects';
import { HttpClientModule } from '@angular/common/http';
import { TodosModule } from './modules/todos/todos.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TodosModule,
    StoreModule.forRoot({ todos: todosReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([ GridEffectsService ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
