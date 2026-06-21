import { Component } from '@angular/core';
import { NcsCard } from "../ncs-card/ncs-card";

@Component({
  selector: 'app-customize-panel',
  imports: [NcsCard],
  templateUrl: './customize-panel.html',
  styleUrl: './customize-panel.scss',
})
export class CustomizePanel {}
