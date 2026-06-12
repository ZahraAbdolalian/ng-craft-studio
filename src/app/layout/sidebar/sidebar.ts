import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NcsCard } from '../../shared/ncs-card/ncs-card';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroSquares2x2, heroCodeBracket, heroSwatch, heroRocketLaunch, heroCog6Tooth, heroRectangleGroup, heroCursorArrowRays, heroWindow, heroBellAlert, heroListBullet, heroArrowRight } from '@ng-icons/heroicons/outline';

type SidebarItem = {
  label: string;
  icon: string;
  route: string;
};

@Component({
  selector: 'app-sidebar',
  imports: [MatCardModule, NcsCard, RouterLink, NgIcon],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  providers: [
    provideIcons({
      heroSquares2x2, heroCodeBracket, heroSwatch, heroRocketLaunch, heroCog6Tooth, heroRectangleGroup, heroCursorArrowRays,
      heroWindow, heroBellAlert, heroListBullet, heroArrowRight,
    })
  ]
})
export class Sidebar {
  readonly collapsed = signal(false);

  readonly componentItems: SidebarItem[] = [
    { label: 'Button', icon: 'heroCursorArrowRays', route: '/generator/button' },
    { label: 'Input', icon: 'heroCodeBracket', route: '/generator/input' },
    { label: 'Card', icon: 'heroSquares2x2', route: '/generator/card' },
    { label: 'Modal', icon: 'heroWindow', route: '/generator/modal' },
    { label: 'Toast', icon: 'heroBellAlert', route: '/generator/toast' },
    { label: 'Select', icon: 'heroListBullet', route: '/generator/select' },
    { label: 'Tabs', icon: 'heroRectangleGroup', route: '/generator/tabs' },
  ];

  readonly resourceItems: SidebarItem[] = [
    { label: 'Templates', icon: 'heroSquares2x2', route: '/templates' },
    { label: 'Theme Builder', icon: 'heroSwatch', route: '/theme-builder' },
    { label: 'Settings', icon: 'heroCog6Tooth', route: '/settings' },
  ];
}
