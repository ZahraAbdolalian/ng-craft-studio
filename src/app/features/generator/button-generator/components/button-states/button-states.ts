import { Component, input, signal } from '@angular/core';
import { NcsCard } from '../../../../../shared/components/ncs-card/ncs-card';
import { ButtonConfig } from '../../models/button-config.model';
import { LucideLoaderCircle, LucideRocket } from '@lucide/angular';
import { NcsButton } from '../../../../../shared/components/ncs-button/ncs-button.directive';
import { NcsTabItem, NcsTabs } from '../../../../../shared/components/ncs-tabs/ncs-tabs';

type StateItem = {
  label: string;
  state: 'default' | 'hover' | 'active' | 'disabled' | 'loading';
};

type VariantItem = {
  label: string;
  variant: 'primary' | 'secondary' | 'soft' | 'ghost' | 'link';
};

type SizeItem = {
  label: string;
  size: 'xs' | 'sm' | 'md' | 'lg';
};

type ShapeItem = {
  label: string;
  radius: number;
  circle?: boolean;
};


@Component({
  selector: 'app-button-states',
  imports: [NcsCard, NcsTabs, NcsButton, LucideLoaderCircle, LucideRocket],
  templateUrl: './button-states.html'
})
export class ButtonStates {
  readonly config = input.required<ButtonConfig>();

  readonly activeTab = signal<string>('states');

  readonly tabs: NcsTabItem[] = [
    { label: 'States', value: 'states' },
    { label: 'Variants', value: 'variants' },
    { label: 'Sizes', value: 'sizes' },
    { label: 'Shapes', value: 'shapes' },
  ];

  readonly stateItems: StateItem[] = [
    { label: 'Default', state: 'default' },
    { label: 'Hover', state: 'hover' },
    { label: 'Active', state: 'active' },
    { label: 'Disabled', state: 'disabled' },
    { label: 'Loading', state: 'loading' },
  ];

  readonly variantItems: VariantItem[] = [
    { label: 'Solid', variant: 'primary' },
    { label: 'Outline', variant: 'secondary' },
    { label: 'Soft', variant: 'soft' },
    { label: 'Ghost', variant: 'ghost' },
    { label: 'Link', variant: 'link' },
  ];

  readonly sizeItems: SizeItem[] = [
    { label: 'XS', size: 'xs' },
    { label: 'S', size: 'sm' },
    { label: 'M', size: 'md' },
    { label: 'L', size: 'lg' },
    // { label: 'XL', size: 'xl' },
  ];

  readonly shapeItems: ShapeItem[] = [
    { label: 'Square', radius: 8 },
    { label: 'Small Radius', radius: 12 },
    { label: 'Medium Radius', radius: 16 },
    { label: 'Large Radius', radius: 999 },
    { label: 'Full Round', radius: 999, circle: true },
  ];

  setTab(tab: string): void {
    this.activeTab.set(tab);
  }
}
