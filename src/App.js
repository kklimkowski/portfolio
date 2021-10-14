import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

import './App.css'
import EasterEgg from './views/EasterEgg';


// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Support from './views/Support';
import Contact from './views/Contact';
import AboutUs from './views/AboutUs';
import FAQ from './views/FAQ';
import Mybucketlist from './views/Mybucketlist';
import Mylifestory from './views/mylifestory';


// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/portfolio" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/portfolio/easter-egg" component={EasterEgg} />
          <AppRoute exact path="/portfolio/support" component={Support} />
          <AppRoute exact path="/portfolio/contact" component={Contact} />
          <AppRoute exact path="/portfolio/aboutus" component={AboutUs} />
          <AppRoute exact path="/portfolio/FAQ" component={FAQ} />
          <AppRoute exact path= "/portfolio/Mybucketlist" component={Mybucketlist} />
          <AppRoute exact path="/portfolio/Mylifestory" component={Mylifestory} />
        </Switch>
      )} />
  );
}

export default App;