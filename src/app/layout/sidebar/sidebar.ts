import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NcsCard } from '../../shared/ncs-card/ncs-card';

@Component({
  selector: 'app-sidebar',
  imports: [MatCardModule, NcsCard],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {
  readonly collapsed = signal(false);

}
