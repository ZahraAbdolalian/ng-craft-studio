import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { Topbar } from '../topbar/topbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-app-shell',
  imports: [Sidebar, Topbar, RouterOutlet],
  templateUrl: './app-shell.html',
  styleUrl: './app-shell.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppShell {}
