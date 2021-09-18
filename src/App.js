import React from 'react';
import './App.css';
import Nav from './component/nav';
import Slide from './component/slide'
import Item  from './component/item';
import Brands from './component/brands';
import Top_items from './component/top_items';
import Items_checkout from './component/item-checkout';
import Footer from './component/footer';
import Contact from './component/contact';

function App() {
  return (
    <div>
      <Nav />
      <Slide />
      <Item />
      <Brands />
      <Top_items />
      {/* <Items_checkout /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
