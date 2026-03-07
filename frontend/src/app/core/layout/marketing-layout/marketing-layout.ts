import { Component } from '@angular/core';
import { MarketingNavbar } from './navbar/navbar';
import { MarketingFooter } from './footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-marketing-layout',
  imports: [MarketingNavbar, MarketingFooter, RouterOutlet],
  templateUrl: './marketing-layout.html',
  styleUrl: './marketing-layout.scss',
})
export class MarketingLayout {}
