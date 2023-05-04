import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

// Import your page components
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import TestimonialsPage from './pages/TestimonialsPage';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
import RequestQuotePage from './pages/RequestQuotePage';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/testimonials" component={TestimonialsPage} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/quote" component={RequestQuotePage} />
        {/* Add any other routes you need here */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
