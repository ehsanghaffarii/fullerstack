import { _ } from '@fullerstack/ngx-i18n';
import { MenuItem } from '@fullerstack/ngx-menu';

export const layoutMenuTree: MenuItem[] = [
  {
    name: _('COMMON.ADMIN'),
    icon: 'wrench',
    permissions: [
      'sitewide.admin_sitewide',
      'sitewide.staff_sitewide',
      'sitewide.finance_sitewide',
    ],
    children: [
      {
        name: _('COMMON.PROFILE'),
        icon: 'account',
        link: '/auth/login',
      },
      {
        name: _('COMMON.CONTACT'),
        icon: 'account-card-details',
        link: '/auth/contact',
        fullspan: true,
      },
      {
        name: _('COMMON.ABOUT'),
        icon: 'account',
        link: '/about/us',
        disabled: true,
      },
    ],
  },
  {
    name: _('COMMON.CURRENCY_EXCHANGE'),
    icon: 'cash-multiple',
    link: '/forex',
  },
  {
    name: _('COMMON.STOCKS'),
    icon: 'trending-up',
    disabled: true,
    children: [
      {
        name: _('COMMON.PORTFLIO'),
        icon: 'account-check',
        link: '/finance/stocks/own',
      },
      {
        name: _('COMMON.WISHLIST'),
        icon: 'playlist-check',
        link: '/finance/stocks/wishlist',
      },
    ],
  },
  {
    name: _('COMMON.BONDS'),
    icon: 'trending-up',
    children: [
      {
        name: _('COMMON.PORTFLIO'),
        icon: 'account-check',
        link: '/finance/bonds/own',
      },
      {
        name: _('COMMON.WISHLIST'),
        icon: 'playlist-check',
        link: '/finance/bonds/whishlist',
      },
    ],
  },
  {
    name: _('COMMON.ETFS'),
    icon: 'trending-up',
    children: [
      {
        name: _('COMMON.PORTFLIO'),
        icon: 'account-check',
        link: '/finance/etfs/own',
        fullspan: true,
      },
      {
        name: _('COMMON.WISHLIST'),
        icon: 'playlist-check',
        link: '/finance/etfs/whishlist',
      },
    ],
  },
  {
    name: _('COMMON.YAHOO_FINANCE'),
    icon: 'google-analytics',
    link: 'https://yahoo.com',
    external: true,
    disabled: true,
  },
  {
    name: _('COMMON.YOUTUBE'),
    icon: 'youtube',
    link: 'https://youtube.com',
    external: true,
    target: '_blank',
  },
  {
    name: _('COMMON.CONTACT_US'),
    icon: 'at',
    link: '/contact/us',
  },
];
