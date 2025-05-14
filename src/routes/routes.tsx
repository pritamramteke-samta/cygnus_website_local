import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Navbar from '../components/Navbar';
import Layout from '../layout/Layout';
import Products from '../pages/products/Products';
import Services from '../pages/services/Services';
import AboutUs from '../pages/aboutUs/AboutUs';
import Resources from '../pages/resources/Resources';

const AppRouter = () => (
  <Layout>
    <Navbar />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/services' element={<Services />} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/resources' element={<Resources />} />
    </Routes>
  </Layout>
);

export default AppRouter;
