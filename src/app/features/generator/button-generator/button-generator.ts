import { Component } from '@angular/core';
import { GeneratorPageLayout } from '../layout/generator-page-layout/generator-page-layout';

@Component({
  selector: 'app-button-generator',
  imports: [GeneratorPageLayout, ],
  templateUrl: './button-generator.html',
  styleUrl: './button-generator.scss',
})
export class ButtonGenerator {}
