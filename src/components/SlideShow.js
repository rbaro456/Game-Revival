import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Background from '../assets/test.jpg';


 function SlideShow() {
    return (
        <Carousel style={de}>
            <Carousel.Item>
                <img
                style={imageStyle}
                className="d-block w-100"
                src={Background}
                alt="First slide"
                />
                
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={imageStyle}
                className="d-block w-100"
                src={Background}
                alt="First slide"
                />
                
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>            
    )
}

const de = {
    width: '100%',
    margin: '0 auto',
    background: 'black',
    paddingRight: '23%',
    paddingLeft: '23%'
}

const imageStyle = {
    height: '400px'
}

export default SlideShow;


