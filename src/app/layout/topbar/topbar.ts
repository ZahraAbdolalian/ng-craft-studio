import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NcsCard } from '../../shared/ncs-card/ncs-card';
import { LucideBookmark, LucideChevronDown, LucideCodeXml, LucideFolderClosed, LucideMoon, LucideSearch, LucideSunMedium } from '@lucide/angular';
import { NcsButton } from '../../shared/ncs-button/ncs-button.directive';

@Component({
  selector: 'app-topbar',
  imports: [NcsCard, NcsButton, LucideFolderClosed, LucideChevronDown, LucideSearch, LucideSunMedium, LucideMoon, LucideBookmark, LucideCodeXml],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Topbar {

  toggleTheme() {}
}
