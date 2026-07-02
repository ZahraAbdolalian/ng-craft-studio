import { Component, input, output } from '@angular/core';
import { LucideChevronDown, LucideCode2, LucideDynamicIcon, LucideIcon, LucideRefreshCw, LucideRocket, LucideRotateCcw, LucideSparkles, LucideX } from '@lucide/angular';
import { NcsCard } from '../../../../../shared/components/ncs-card/ncs-card';
import { ButtonBooleanKey, ButtonConfig, ButtonIcon, ButtonOutputMode, ButtonSize, ButtonVariant } from '../../models/button-config.model';
import { buttonIcons, buttonOutputModes, buttonSizes, buttonVariants, defaultButtonConfig } from '../../data/button-options';
import { NcsButton } from '../../../../../shared/components/ncs-button/ncs-button.directive';

@Component({
  selector: 'app-button-customize-panel',
  imports: [NcsCard, LucideRotateCcw, NcsButton, LucideDynamicIcon, LucideX, LucideChevronDown],
  templateUrl: './button-customize-panel.html'
})
export class ButtonCustomizePanel {

  readonly config = input.required<ButtonConfig>();
  readonly configChange = output<ButtonConfig>();

  readonly outputModes = buttonOutputModes;
  readonly variants = buttonVariants;
  readonly sizes = buttonSizes;
  readonly icons = buttonIcons;

  readonly resetIcon = LucideRefreshCw;
  readonly chevronDownIcon = LucideChevronDown;
  readonly clearIcon = LucideX;

  readonly iconMap: Record<ButtonIcon, LucideIcon | null> = {
    rocket: LucideRocket,
    sparkles: LucideSparkles,
    code: LucideCode2,
    none: null,
  };

  setOutputMode(outputMode: ButtonOutputMode): void {
    this.patch({ outputMode });
  }

  setVariant(variant: ButtonVariant): void {
    this.patch({ variant });
  }

  setSize(size: ButtonSize): void {
    this.patch({ size });
  }

  setRadius(radius: number): void {
    this.patch({ radius });
  }

  setIconLeft(iconLeft: ButtonIcon): void {
    this.patch({ iconLeft });
  }

  setLabel(label: string): void {
    this.patch({ label });
  }

  toggle(key: ButtonBooleanKey): void {
    this.patch({
      [key]: !this.config()[key],
    } as Pick<ButtonConfig, ButtonBooleanKey>);
  }

  reset(): void {
    this.configChange.emit(defaultButtonConfig);
  }

  private patch(patch: Partial<ButtonConfig>): void {
    this.configChange.emit({
      ...this.config(),
      ...patch,
    });
  }

}
