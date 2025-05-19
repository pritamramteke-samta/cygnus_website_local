import type { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
}

interface FooterLinkProps {
  name: string;
  link: string;
}

interface FooterLinksProps {
  flinks: FooterLinkProps[];
}

export type { AppLayoutProps, FooterLinksProps };
