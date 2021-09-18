import React from 'react';
import a1 from '../img/a1.jpg';
import a2 from '../img/a2.jpg';
import a3 from '../img/a3.jpg';
import a4 from '../img/a4.jpg';
import a5 from '../img/a5.jpg';
import a6 from '../img/a6.jpg';
import a7 from '../img/a7.jpg';
import a8 from '../img/a8.jpg';
import Items_checkout from './item-checkout';
import '../App.css';
import Items_check from './item-checkout';

class Top_items extends React.Component{
    render(){
        return(
        
      <section class="text-gray-600 body-font item m-4">
        <h3 className="item-tag"> --- Top Items ---</h3>
        <div class="container px-5 py-3 mx-auto">
          <div class="flex flex-wrap -m-5">
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a href={Items_check}  class="block relative h-65 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-auto h-auto block" src={a1} />
              </a>
              <div class="mt-4">
               
                <h2 class="text-gray-900 title-font text-lg font-medium">Navy Blue Shirt  </h2>
                <p class="mt-1">₹699/- (60% OFF)</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-65 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={a2} />
              </a>
              <div class="mt-4">
              <h2 class="text-gray-900 title-font text-lg font-medium">Dark Black Shirt  </h2>
                <p class="mt-1">₹499/- (80% OFF)</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-65 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={a3} />
              </a>
              <div class="mt-4">
              <h2 class="text-gray-900 title-font text-lg font-medium">Dark Green Kurta Set </h2>
                <p class="mt-1">₹1899/- (50% OFF)</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-65 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={a4} />
              </a>
              <div class="mt-4">
              <h2 class="text-gray-900 title-font text-lg font-medium">Dark Black One Peice </h2>
                <p class="mt-1">₹999/- (40% OFF)</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-65 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={a5} />
              </a>
              <div class="mt-4">
              <h2 class="text-gray-900 title-font text-lg font-medium">Fossil Watch For Men  </h2>
                <p class="mt-1">₹749/- (60% OFF)</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-65 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={a6} />
              </a>
              <div class="mt-4">
              <h2 class="text-gray-900 title-font text-lg font-medium">Fossil Watch Formal Collection  </h2>
                <p class="mt-1">₹7499/- (20% OFF)</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-65 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={a7} />
              </a>
              <div class="mt-4">
              <h2 class="text-gray-900 title-font text-lg font-medium">Noise Earbuds With Mic  </h2>
                <p class="mt-1">₹1899/- (50% OFF)</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-65 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={a8} />
              </a>
              <div class="mt-4">
              <h2 class="text-gray-900 title-font text-lg font-medium">Infinite (JBL) Headphone Full Bass  </h2>
                <p class="mt-1">₹999/- (70% OFF)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}
 export default Top_items;