import { lazy } from 'react';

const Home = lazy(() => import('./home/Home'));
const AboutUs = lazy(() => import('./aboutUs/AboutUs'));
const Contact = lazy(() => import('./contact/Contact'));
const Products = lazy(() => import('./products/Products'));
const Resources = lazy(() => import('./resources/Resources'));
const Services = lazy(() => import('./services/Services'));

const NotFound = lazy(() => import('./error/notFound/NotFound'));

export { Home, Contact, Products, Resources, Services, AboutUs, NotFound };
