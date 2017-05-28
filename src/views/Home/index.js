import React, { Component } from 'react';
import './index.css';
import {Link} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
              <section className='intro'>
                <div className='inner'>
                  <div className='content'>
                      <h1>Aquaponics monitoring</h1>
                      <p>Automatic monitoring for aquaponics system</p>
                        <Link to={'/monitoring'} className='btn'>Monitoring</Link>
                        <Link to={'/services'} className='btn'>Services</Link>
                        <a href='https://oa-farm.github.io' className='btn'>Blog</a>
                  </div>
                </div>
             </section>
    );
  }
}

export default Home;
