import { Component, signal } from '@angular/core';
import { GeneratorPageLayout } from '../layout/generator-page-layout/generator-page-layout';
import { ButtonCustomizePanel } from './components/button-customize-panel/button-customize-panel';
import { defaultButtonConfig } from './data/button-options';
import { ButtonConfig } from './models/button-config.model';

@Component({
  selector: 'app-button-generator',
  imports: [GeneratorPageLayout, ButtonCustomizePanel],
  templateUrl: './button-generator.html',
  styleUrl: './button-generator.scss',
})
export class ButtonGenerator {
  readonly buttonConfig = signal<ButtonConfig>(defaultButtonConfig);  
}
