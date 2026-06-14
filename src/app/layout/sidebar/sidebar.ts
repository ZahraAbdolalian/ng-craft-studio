import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NcsCard } from '../../shared/ncs-card/ncs-card';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  LucideCaptions, LucideDynamicIcon, LucideIcon, LucideLayoutDashboard, LucideMessageCircle, LucidePalette, LucidePanelTop,
  LucidePanelTopDashed, LucideSettings, LucideSquareArrowRightEnter, LucideSquareMousePointer,
  LucideTextCursorInput,
} from '@lucide/angular';

type SidebarItem = {
  label: string;
  icon: LucideIcon;
  route: string;
};

@Component({
  selector: 'app-sidebar',
  imports: [MatCardModule, NcsCard, RouterLink, RouterLinkActive, LucideDynamicIcon],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  readonly collapsed = signal(false);

  readonly componentItems: SidebarItem[] = [
    { label: 'Button', icon: LucideSquareMousePointer, route: '/generator/button' },
    { label: 'Input', icon: LucideTextCursorInput, route: '/generator/input' },
    { label: 'Card', icon: LucideCaptions, route: '/generator/card' },
    { label: 'Modal', icon: LucidePanelTop, route: '/generator/modal' },
    { label: 'Toast', icon: LucideMessageCircle, route: '/generator/toast' },
    { label: 'Select', icon: LucideSquareArrowRightEnter, route: '/generator/select' },
    { label: 'Tabs', icon: LucidePanelTopDashed, route: '/generator/tabs' },
  ];

  readonly resourceItems: SidebarItem[] = [
    { label: 'Templates', icon: LucideLayoutDashboard, route: '/templates' },
    { label: 'Theme Builder', icon: LucidePalette, route: '/theme-builder' },
    { label: 'Settings', icon: LucideSettings, route: '/settings' },
  ];
}
