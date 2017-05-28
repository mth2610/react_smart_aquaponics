import React, { Component } from 'react';
import './index.css';
import {Link} from 'react-router-dom'

class Services extends Component {
  render() {
    return (
      <div className='container'>
        <div className='tool'>
          <figure>
            <Link to={'/services/count_circles'}>
              <img src='https://lh3.googleusercontent.com/B5bB3B4mI2oiEEL3ZAqh-v4d5QVwo-395W0xw0nTuo5JjgyDrM0tab4XzqgXqE81frhu4Ytr-ho4O8HYgayxIzLYFNCqlA=s688' />
            </Link>
          </figure>
          <div className='tool-description'>
            Hihi, tool1
          </div>
        </div>
        <div className='tool'>
          <figure>
            <a>
              <img src='https://lh3.googleusercontent.com/4e3pbYtGJtLrSUq_giCaq4IDlb10_9MCLgS4Iw4PxCSZtbFigXd26RScEOcmvtZeU5LcuSkWf43anuGNqcDxxPPdSI6UgXM=s688' />
            </a>
          </figure>
          <div className='tool-description'>
            Hihi, tool2
          </div>
        </div>
        <div className='tool'>
          <figure>
            <a>
              <img src='https://lh3.googleusercontent.com/B5bB3B4mI2oiEEL3ZAqh-v4d5QVwo-395W0xw0nTuo5JjgyDrM0tab4XzqgXqE81frhu4Ytr-ho4O8HYgayxIzLYFNCqlA=s688' />
            </a>
          </figure>
          <div className='tool-description'>
            Hihi, tool3
          </div>
        </div>
        <div className='tool'>
          <figure>
            <a>
              <img src='https://lh3.googleusercontent.com/4e3pbYtGJtLrSUq_giCaq4IDlb10_9MCLgS4Iw4PxCSZtbFigXd26RScEOcmvtZeU5LcuSkWf43anuGNqcDxxPPdSI6UgXM=s688' />
            </a>
          </figure>
          <div className='tool-description'>
            Hihi, tool4
          </div>
        </div>
        <div className='tool'>
          <figure>
            <a>
              <img src='https://lh3.googleusercontent.com/4e3pbYtGJtLrSUq_giCaq4IDlb10_9MCLgS4Iw4PxCSZtbFigXd26RScEOcmvtZeU5LcuSkWf43anuGNqcDxxPPdSI6UgXM=s688' />
            </a>
          </figure>
          <div className='tool-description'>
            Hihi, tool5
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
