import { Facebook, Instagram, LinkedIn, X, Youtube } from '@assets/index';
import RoutePaths from '@routes/routePaths';

const footerlinksData1 = [
  {
    name: 'Services',
    link: '',
  },
  {
    name: 'Regulatory Risk Compliance',
    link: RoutePaths.aboutus,
  },
  {
    name: 'Third Party Risk',
    link: RoutePaths.home,
  },
  {
    name: 'Cyber Security',
    link: RoutePaths.aboutus,
  },
  {
    name: 'Technology Consulting',
    link: RoutePaths.products,
  },
];

const footerlinksData2 = [
  {
    name: 'Products',
    link: '',
  },
  {
    name: 'Open Compliance Suite',
    link: RoutePaths.products,
  },
];

const footerlinksData3 = [
  {
    name: 'Industries',
    link: '',
  },
  {
    name: 'FI',
    link: RoutePaths.home,
  },
  {
    name: 'FinTechs',
    link: RoutePaths.home,
  },
  {
    name: 'Insurance',
    link: RoutePaths.aboutus,
  },
  {
    name: 'Cryptos',
    link: RoutePaths.products,
  },
];

const footerlinksData4 = [
  {
    name: 'Company',
    link: '',
  },
  {
    name: 'About us',
    link: '',
  },
  {
    name: 'Resources Hub',
    link: RoutePaths.home,
  },
  {
    name: 'Recent Insight',
    link: RoutePaths.aboutus,
  },
  {
    name: 'Careers',
    link: RoutePaths.products,
  },
];

//  <a
//             href="https://www.facebook.com"
//             target="_blank"
//             rel="noopener noreferrer">
//               <img
//               src={Facebook}
//               className='social-links-logo'
//               alt="Facebook"
//               />
//               </a>

const socialLinksData = [
  {
    linkUrl: 'https://www.facebook.com',
    target: '_blank',
    imgPath: Facebook,
    alt: 'Facebook',
  },
  {
    linkUrl: 'https://www.instagram.com',
    target: '_blank',
    imgPath: Instagram,
    alt: 'Instagram',
  },
  {
    linkUrl: 'https://twitter.com', // or https://x.com if preferred
    target: '_blank',
    imgPath: X, // or XLogo if using an "X" logo
    alt: 'Twitter (X)',
  },
  {
    linkUrl: 'https://www.linkedin.com',
    target: '_blank',
    imgPath: LinkedIn,
    alt: 'LinkedIn',
  },
  {
    linkUrl: 'https://www.youtube.com',
    target: '_blank',
    imgPath: Youtube,
    alt: 'YouTube',
  },
];

export {
  footerlinksData1,
  footerlinksData2,
  footerlinksData3,
  footerlinksData4,
  socialLinksData,
};
