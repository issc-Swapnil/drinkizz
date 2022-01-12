import React, { Suspense } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Layout/Header/Header';
import Footer from './Layout/footer/footer';
import ScrollButton from './Layout/ScrollButton/ScrollButton'
import ScrollToTop from './Layout/ScrollToTop/ScrollToTop'

function App() {
  const Home = React.lazy(() => import('./View/Home/Home'))
  const Compare = React.lazy(() => import('./View/Compare/Compare'))
  const ProductDetail = React.lazy(() => import('./View/ProductDetails/ProductDetails'))
  const Cart = React.lazy(() => import('./View/Cart/Cart'))
  const Wishlist = React.lazy(() => import('./View/Wishlist/Wishlist'))
  const submit = React.lazy(()=>import('./View/Cart/Submit'))

  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div id="loader"></div>}>
          <ScrollToTop />
          <Header />
            <Switch>
              <Route exact path="/wishlist" component={Wishlist}></Route>
              <Route exact path="/compare" component={Compare}></Route>
              <Route exact path="/cart" component={Cart}></Route>
              <Route exact path="/submit" component={submit}></Route>
              <Route exact path="/product-details/:id" component={ProductDetail}></Route>
              <Route exact path="/" component={Home}></Route>
              <Route exact component={Home}></Route>
            </Switch>
          <ScrollButton />
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
