import React from 'react';
import logo2 from '../img/001.jpg';
import '../App.css'

class Slide extends React.Component {
    render() {
        return (
            <div className="slide">
                <a href="#"><img src={logo2} className="img" /></a>
            </div>

        );
    }
}
export default Slide;