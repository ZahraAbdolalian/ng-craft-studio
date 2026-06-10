import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NcsCard } from '../../shared/ncs-card/ncs-card';

@Component({
  selector: 'app-topbar',
  imports: [NcsCard],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Topbar {}
