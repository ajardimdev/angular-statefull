import { Component } from '@angular/core';
import { IContadorState, decrementaContador, incrementaContador } from './contador.state';
import { Observable, map } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.sass']
})
export class ContadorComponent {
  constructor(
      private readonly store: Store<{ contador: IContadorState }>) {
  }

  counter$: Observable<number> = this.store.select('contador')
    .pipe(
        map(({ counter}) => counter)
    )

  incrementar = () => {
    this.store.dispatch(incrementaContador())
  }

  decrementar = () => {
    this.store.dispatch(decrementaContador())
  }
}
