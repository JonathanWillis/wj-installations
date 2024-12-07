import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Projects',
      href: getBlogPermalink(),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
  ],
  actions: [{ text: 'Contact', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
    },
    {
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/people/WJ-installations/100064687642066/' },
  ],
  footNote: `
    WJ Installations (Stafford)</br>
    Website by Software Minions Limited.
  `,
};
