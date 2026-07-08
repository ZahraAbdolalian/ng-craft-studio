import { Component, computed, input, signal } from '@angular/core';
import { NcsCard } from '../../../../../shared/components/ncs-card/ncs-card';
import { NcsButton } from '../../../../../shared/components/ncs-button/ncs-button.directive';
import { LucideCopy, LucideSettings } from '@lucide/angular';
import { NcsTabItem, NcsTabs } from '../../../../../shared/components/ncs-tabs/ncs-tabs';
import { ButtonConfig } from '../../models/button-config.model';

type CodeTab = 'html' | 'ts' | 'scss' | 'preview';

@Component({
  selector: 'app-button-code-output',
  imports: [NcsCard, NcsButton, NcsTabs, LucideSettings, LucideCopy],
  templateUrl: './button-code-output.html',
  styleUrl: './button-code-output.scss',
})
export class ButtonCodeOutput {
  readonly config = input.required<ButtonConfig>();

  readonly activeTab = signal<CodeTab>('html');

  readonly tabs: NcsTabItem[] = [
    { label: 'HTML', value: 'html' },
    { label: 'TS', value: 'ts' },
    { label: 'SCSS', value: 'scss' },
    { label: 'Preview', value: 'preview' },
  ];

  readonly htmlCode = computed(() => {
    const config = this.config();

    return `<button
  type="button"
  class="btn btn-${config.variant} btn-${config.size} radius-${config.radius}"
  ${config.disabled ? 'disabled' : ''}
>
  ${config.iconLeft !== 'none' ? `<i class="icon icon-${config.iconLeft}"></i>` : ''}
  <span>${config.label}</span>
</button>`;
  });

  readonly tsCode = computed(() => {
    return `import { Component } from '@angular/core';

@Component({
  selector: 'app-button-example',
  templateUrl: './button-example.html',
  styleUrl: './button-example.scss',
})
export class ButtonExampleComponent {
  onGenerate(): void {
    // Handle generate action
  }
}`;
  });

  readonly scssCode = computed(() => {
    const config = this.config();

    return `.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid transparent;
  border-radius: ${config.radius}px;
  font-weight: 700;
  transition: 160ms ease;
}

.btn-${config.size} {
  ${this.getSizeCss(config.size)}
}

${this.getVariantCss(config.variant)}`;
  });

  readonly currentCode = computed(() => {
    
    switch (this.activeTab()) {
      case 'html':
        return this.htmlCode();
      case 'ts':
        return this.tsCode();
      case 'scss':
        return this.scssCode();
      case 'preview':
        return '// Preview output will be generated here.';
    }
  });

  setActiveTab(value: string): void {
    if (!this.isCodeTab(value)) return;

    this.activeTab.set(value);
  }

  async copyCurrentCode(): Promise<void> {
    await navigator.clipboard.writeText(this.currentCode());
  }

  private isCodeTab(value: string): value is CodeTab {
    return value === 'html'
      || value === 'ts'
      || value === 'scss'
      || value === 'preview';
  }

  private getSizeCss(size: ButtonConfig['size']): string {
    const sizes: Record<ButtonConfig['size'], string> = {
      xs: `height: 2rem;
  padding-inline: 0.75rem;
  font-size: 0.75rem;`,
      sm: `height: 2.25rem;
  padding-inline: 0.875rem;
  font-size: 0.8125rem;`,
      md: `height: 2.75rem;
  padding-inline: 1.125rem;
  font-size: 0.875rem;`,
      lg: `height: 3rem;
  padding-inline: 1.5rem;
  font-size: 0.9375rem;`,
      xl: `height: 3.5rem;
  padding-inline: 1.875rem;
  font-size: 1rem;`,
    };

    return sizes[size];
  }

  private getVariantCss(variant: ButtonConfig['variant']): string {
    const variants: Record<ButtonConfig['variant'], string> = {
      primary: `.btn-primary {
  background: #0b1f4d;
  border-color: #0b1f4d;
  color: #ffffff;
  box-shadow: 0 14px 28px rgba(11, 31, 77, 0.18);
}

.btn-primary:hover {
  background: #123376;
  border-color: #123376;
}`,
      secondary: `.btn-secondary {
  background: #ffffff;
  border-color: #2563eb;
  color: #1d4ed8;
}

.btn-secondary:hover {
  background: #eff6ff;
}`,
      soft: `.btn-soft {
  background: #eff6ff;
  border-color: #dbeafe;
  color: #0b1f4d;
}

.btn-soft:hover {
  background: #dbeafe;
}`,
      ghost: `.btn-ghost {
  background: transparent;
  border-color: transparent;
  color: #0b1f4d;
}

.btn-ghost:hover {
  background: #f1f5f9;
}`,
      link: `.btn-link {
  height: auto;
  padding: 0;
  background: transparent;
  border-color: transparent;
  color: #1d4ed8;
}

.btn-link:hover {
  color: #0b1f4d;
  text-decoration: underline;
}`,
    };

    return variants[variant];
  }
}
