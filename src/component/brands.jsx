import React from 'react';
import Raymond from '../img/Raymond.jpg';
import Titan from '../img/Titan.jpg';
import Rayban from '../img/Rayban.jpg';
import Puma from '../img/puma.jpg'
import '../App.css';

class Brands extends React.Component {
  render() {
    return (

      <section class="text-gray-600 body-font m-4 ">
        <h3 className="item-tag"> --- Top Brands ---</h3>
        <div class="container px-5 py-3 mx-auto">
          <div class="flex flex-wrap -m-5">
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-65 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={Raymond} />
              </a>

            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-65 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={Titan} />
              </a>

            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-65 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={Rayban} />
              </a>

            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-65 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={Puma} />
              </a>

            </div>

          </div>
        </div>
      </section>

    );
  }
}
export default Brands;