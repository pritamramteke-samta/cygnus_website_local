import { Routes, Route } from 'react-router-dom';
import RoutePaths from './routePaths';
import Layout from '@layout/AppLayout';
import {
  AboutUs,
  Home,
  NotFound,
  Products,
  Resources,
  Services,
} from '@modules/index';

const AppRouter = () => (
  <Layout>
    <Routes>
      <Route path={RoutePaths.home} element={<Home />} />
      <Route path={RoutePaths.products} element={<Products />} />
      <Route path={RoutePaths.services} element={<Services />} />
      <Route path={RoutePaths.aboutus} element={<AboutUs />} />
      <Route path={RoutePaths.resources} element={<Resources />} />
      <Route path={RoutePaths.nowhere} element={<NotFound />} />
    </Routes>
  </Layout>
);

export default AppRouter;
