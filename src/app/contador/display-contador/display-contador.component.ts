import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IContadorState } from '../contador.state';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-display-contador',
  templateUrl: './display-contador.component.html',
  styleUrls: ['./display-contador.component.sass']
})
export class DisplayContadorComponent {
  constructor(private readonly store: Store<{ contador: IContadorState }>) {
  }

  counter$: Observable<number> = this.store.select('contador')
    .pipe(
      map(({ counter }) => counter)
    )
}
