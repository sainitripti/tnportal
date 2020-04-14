import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import alumni1 from "../images/DurgaShaktiNagpal.png";
class AlumniPage extends Component {
    render() {
        
        return (
            <div>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={alumni1}
                    alt="First slide- Durga shakti nagpal, IAS"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
        )
    }
}

export default AlumniPage;