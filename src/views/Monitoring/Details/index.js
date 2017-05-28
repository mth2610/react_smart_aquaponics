import React, {Component} from 'react';
import { Card, Divider, Segment, Grid, Header, Accordion, Image} from 'semantic-ui-react'
import './index.css';
import airTemperature from '../../../images/IoT/air-temperature.svg'
import waterTemperature from '../../../images/IoT/water-temperature.svg'
import light from '../../../images/IoT/light.svg'

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datavalues: []
    };
  }

  componentDidMount() {
    console.log(this.state);
    console.log(this.props);

    fetch(`http://localhost:8000/api/datavalues${this.props.location.search}`)
      .then(response => response.json())
      .then((data) => this.setState({datavalues:data}))
      .catch(err => console.error('Error ', err.toString()));
  }

  render (){
    return (
            <Segment>
            <Header as='h1' dividing> SITE 1</Header>
            </Segment>
          )
  }
}

export default Details;
