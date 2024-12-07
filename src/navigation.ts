import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About us',
      links: [
        {
          text: 'Our philosophy',
          href: getPermalink('/philosophy'),
        },
        {
          text: 'Projects',
          href: getPermalink('/projects'),
        },
        {
          text: 'Meet the Team',
          href: getPermalink('/team'),
        },
        {
          text: 'Careers',
          href: getPermalink('/careers'),
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
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
        { text: 'About', href: getPermalink('/') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'Team', href: getPermalink('/team') },
        { text: 'Careers', href: getPermalink('/careers') },
        { text: 'Shop', href: 'https://softwareminions.mymerchr.com' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://uk.linkedin.com/company/software-minions' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/people/Software-Minions/61568786467402/' },
  ],
  footNote: `
    Registered in England & Wales - VAT Number 210 920 749</br>
    Software Minions Limited Company - Registration Number <a href="https://find-and-update.company-information.service.gov.uk/company/09499011">09499011</a>
  `,
};
