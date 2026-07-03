import { Component, input, model } from '@angular/core';

export type NcsTabsVariant = 'underline' | 'pills';
export type NcsTabsSize = 'sm' | 'md';
export type NcsTabsAlign = 'start' | 'center' | 'stretch';

export type NcsTabItem = {
  label: string;
  value: string;
  disabled?: boolean;
  badge?: string | number;
};

@Component({
  selector: 'app-ncs-tabs',
  imports: [],
  templateUrl: './ncs-tabs.html',
  styleUrl: './ncs-tabs.scss',
})
export class NcsTabs {
  readonly items = input.required<readonly NcsTabItem[]>();

  readonly value = model<string>('');

  readonly variant = input<NcsTabsVariant>('underline');
  readonly size = input<NcsTabsSize>('md');
  readonly align = input<NcsTabsAlign>('stretch');
  readonly ariaLabel = input('Tabs');

  selectTab(item: NcsTabItem): void {
    if (item.disabled) return;

    this.value.set(item.value);
  }

  isActive(item: NcsTabItem): boolean {
    return this.value() === item.value;
  }
}
