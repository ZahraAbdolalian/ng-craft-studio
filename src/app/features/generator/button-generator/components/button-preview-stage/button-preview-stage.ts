import { Component, computed, input, signal } from '@angular/core';
import { NcsCard } from '../../../../../shared/components/ncs-card/ncs-card';
import { NcsButton } from '../../../../../shared/components/ncs-button/ncs-button.directive';
import { LucideCode2, LucideDynamicIcon, LucideIcon, LucideMonitor, LucideRocket, LucideSmartphone, LucideSparkles, LucideTablet } from '@lucide/angular';
import { ButtonConfig, ButtonIcon } from '../../models/button-config.model';

type PreviewDevice = 'desktop' | 'tablet' | 'mobile';

@Component({
  selector: 'app-button-preview-stage',
  imports: [NcsCard, NcsButton, LucideMonitor, LucideTablet, LucideSmartphone, LucideDynamicIcon],
  templateUrl: './button-preview-stage.html',
  styles: `
  .preview-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    max-width: 100%;
    font-weight: 700;
    transition:
      transform 160ms ease,
      box-shadow 160ms ease,
      background-color 160ms ease,
      border-color 160ms ease,
      color 160ms ease;
  }

  .preview-spinner {
    width: 18px;
    height: 18px;
    border: 2px solid currentColor;
    border-top-color: transparent;
    border-radius: 999px;
    animation: preview-spin 700ms linear infinite;
  }

  @keyframes preview-spin {
    to {
      transform: rotate(360deg);
    }
  }
  `
})
export class ButtonPreviewStage {
  readonly config = input.required<ButtonConfig>();

  readonly selectedDevice = signal<PreviewDevice>('desktop');

  readonly iconMap: Record<ButtonIcon, LucideIcon | null> = {
    rocket: LucideRocket,
    sparkles: LucideSparkles,
    code: LucideCode2,
    none: null,
  };

  setDevice(device: PreviewDevice): void {
    this.selectedDevice.set(device);
  }

  readonly stageWidthClass = computed(() => {
    switch (this.selectedDevice()) {
      case 'mobile':
        return 'w-[320px]';
      case 'tablet':
        return 'w-[520px]';
      default:
        return 'w-full';
    }
  });

  readonly previewIcon = computed(() => {
    return this.iconMap[this.config().iconLeft];
  });
}
