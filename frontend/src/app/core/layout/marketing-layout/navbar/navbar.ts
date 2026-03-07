import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

interface NavbarLink {
  name: string;
  route: string;
  bgColor?: string;
}

@Component({
  selector: 'app-marketing-navbar',
  imports: [NgIcon],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class MarketingNavbar {
  navbarLinks: NavbarLink[] = [
    {
      name: 'About',
      route: '/about',
    },
    {
      name: 'Schedule',
      route: '/schedule',
    },
    {
      name: 'Membership',
      route: '/membership',
    },
    {
      name: 'FAQ',
      route: '/faq',
    },
  ];

  actionBtns: NavbarLink[] = [
    {
      name: 'Contact',
      route: '/contact',
      bgColor: 'accent',
    },
    {
      name: 'Member Login',
      route: '/login',
      bgColor: 'primary',
    },
  ];
}
