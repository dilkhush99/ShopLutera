import React from 'react';
import i1 from '../img/i01.jpg';
import i2 from '../img/i02.jpg';
import i3 from '../img/i03.jpg';
import i4 from '../img/i004.jpg';
import i5 from '../img/i05.jpg';
import i6 from '../img/i06.jpg';
import i7 from '../img/i07.jpg';
import i8 from '../img/i08.jpg';
import '../App.css'

class Item extends React.Component {
  render() {
    return (
      <section class="text-gray-600 body-font item">
        <h3 className="item-tag"> --- Categories ---</h3>
        <div class="container px-5 py-3 mx-auto">
          <div class="flex flex-wrap -m-5">
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-65 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-auto h-auto block" src={i1} />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Women Western Wear</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Shorts & Tshirts </h2>
                <p class="mt-1">50-60% OFF</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-65 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={i2} />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Indian Wear</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Indian Style</h2>
                <p class="mt-1">40-60% OFF</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-65 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={i3} />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Footware</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Casual & Formal Shoes</h2>
                <p class="mt-1">50-70% OFF</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-65 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={i4} />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Men's Casual Wear</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Western Style </h2>
                <p class="mt-1">30-40% OFF</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-65 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={i5} />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">International Wear</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">free style wear</h2>
                <p class="mt-1">30-40% OFF</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-65 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={i6} />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Top Western Wear</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Free Style Wear</h2>
                <p class="mt-1">40-50% OFF</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-65 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={i7} />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Airpodes</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Boat Airpodeds</h2>
                <p class="mt-1">30-40% OFF</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-65 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={i8} />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Mens Wear</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">T-shirts & Shirts</h2>
                <p class="mt-1">40-60% OFF</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}
export default Item;