import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Card, Divider, Segment, Grid, Header, Accordion, Image, Button, Container,Checkbox, Table, Icon} from 'semantic-ui-react'
import './index.css';
import airTemperature from '../../images/IoT/air-temperature.svg';
import waterTemperature from '../../images/IoT/water-temperature.svg';
import light from '../../images/IoT/light.svg';
import humidity from '../../images/IoT/humidity.svg';

const TableExampleApprove = () => {
  return (
    <Table compact celled definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Registration Date</Table.HeaderCell>
          <Table.HeaderCell>E-mail address</Table.HeaderCell>
          <Table.HeaderCell>Premium Plan</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell collapsing>
            <Checkbox slider />
          </Table.Cell>
          <Table.Cell>John Lilki</Table.Cell>
          <Table.Cell>September 14, 2013</Table.Cell>
          <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
          <Table.Cell>No</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell collapsing>
            <Checkbox slider />
          </Table.Cell>
          <Table.Cell>Jamie Harington</Table.Cell>
          <Table.Cell>January 11, 2014</Table.Cell>
          <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
          <Table.Cell>Yes</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell collapsing>
            <Checkbox slider />
          </Table.Cell>
          <Table.Cell>Jill Lewis</Table.Cell>
          <Table.Cell>May 11, 2014</Table.Cell>
          <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
          <Table.Cell>Yes</Table.Cell>
        </Table.Row>
      </Table.Body>

      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell colSpan='4'>
            <Button floated='right' icon labelPosition='left' primary size='small'>
              <Icon name='user' /> Add User
            </Button>
            <Button size='small'>Approve</Button>
            <Button disabled size='small'>Approve All</Button>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )
}

function SensorImage (props) {
  if (props.sensorCode.includes('LIGHT')) {
    return   (
            <div className='iotImage'>
              <Image className='iotImage' src={light}/>
            </div>
    )
  } else if (props.sensorCode.includes('WATER_TEMPERATURE')) {
    return (
            <div className='iotImage'>
              <Image className='iotImage' src={waterTemperature}/>
            </div>
    )
  } else if (props.sensorCode.includes('AIR_TEMPERATURE')) {
    return (
      <div className='iotImage'>
        <Image className='iotImage' src={airTemperature}/>
      </div>
    )
  } else if (props.sensorCode.includes('RELATIVE_HUMIDITY')) {
    return (
      <div className='iotImage'>
        <Image className='iotImage' src={humidity}/>
      </div>
    )
  }
};

function CameraCotroller (action){
  var urlApi = `http://localhost:8000/api/ipcamera_controller?mac_adr=00:0c:00:09:31:fa&action=${action}`;
  console.log(urlApi)
  fetch(urlApi)
   .then((response) => {
        if(response.ok) {
          return response.json()
        } else {
          console.log('Server response wasn\'t OK');
        }
      }).then((data) => {

      })
}
class LastestImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: 'null',
    };
  }
  getLastestImage(url) {
    fetch(url)
    .then((response) => {
         if(response.ok) {
           return response.json();
         } else {
           console.log('Server response wasn\'t OK');
         }
       })
    .then((data) => {
      if(data[0]){
        this.setState({path:data[0].path})
      }

    })
  }

  componentDidMount() {
    var apiUrl = `http://localhost:8000/api/images?site_code=${this.props.siteCode}&number_of_data=1`;
    this.getLastestImage(apiUrl);
  }

  render () {
    return <Image src={this.state.path} />
  }

};

class LastestDatavalue extends Component {
    constructor(props) {
      super(props);

      this.state = {
        value: 'null',
      };
    }

    getLastestDatavalue(url){
      fetch(url)
      .then((response) => {
           if(response.ok) {
             return response.json()
           } else {
             console.log('Server response wasn\'t OK');
           }
         })
      .then((data) => {
        if(data[0]){
          this.setState({value:data[0].value})
        }

      })
    }

    componentDidMount() {
      var apiUrl = `http://localhost:8000/api/datavalues?site_code=${this.props.siteCode}&sensor_code=${this.props.sensorCode}&number_of_data=1`;
      this.getLastestDatavalue(apiUrl);
    }

    render () {
      return <div>{this.state.value} {this.props.unit}</div>
    }
  }

class Sensor extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render (){
    return (
        <Card>
          <SensorImage sensorCode={this.props.sensorCode}/>
          <Card.Content>
            <Card.Header>
              <LastestDatavalue siteCode={this.props.siteCode} sensorCode={this.props.sensorCode} unit={this.props.unit} />
            </Card.Header>
            <Card.Meta>
            </Card.Meta>
            <Card.Description>
              <Link to={{  pathname:'/monitoring/details/',
                           search:`?site_code=${this.props.siteCode}&sensor_code=${this.props.sensorCode}`,
                           state: {querry:{siteCode:this.props.siteCode,sensor_code:this.props.sensorCode}}
                         }} siteCode={this.props.siteCode} sensorCode={this.props.sensorCode} >
                 {this.props.sensorCode}
              </Link>
            </Card.Description>
          </Card.Content>
        </Card>
    )
  }
}

class FishTank extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    var apiUrl = `http://localhost:8000/api/fishtanks/?site_code=${this.props.siteCode}&number_of_data=1`;
    this.getLastestDatavalue(apiUrl);
  }

  render (){
    return (
        <Accordion/>
    )
  }
}

class Sites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sites: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/sites')
      .then(response => response.json())
      .then((data) => this.setState({sites:data}))
      .catch(err => console.error('Error ', err.toString()));
  }

  render (){
    return (
       <div className='site'>
        {this.state.sites.map(function(site,i){
          return (
              <Segment >
                <Header as='h2' dividing>{site.site_code}</Header>
                  <Card.Group>
                      {site.sensors.map(function(sensor,i){
                        return(
                            <Sensor siteCode={site.site_code} sensorCode={sensor.sensor_code} unit={sensor.unit}/>
                        )
                      }
                    )}
                  </Card.Group>
                <Header as='h3' dividing>Fish tank</Header>
                <TableExampleApprove />
                <Header as='h3' dividing>Images</Header>
                <LastestImage siteCode={site.site_code} />
                <Header as='h3' dividing>Camera streaming</Header>
                <div>
                  <Image width='80%'  src='http://192.168.1.47/videostream.cgi?loginuse=admin&loginpas=admin' />
                  <Button.Group verticalAlign='middle' basic size='medium'>
                    <Button icon='arrow up' onClick={()=>{CameraCotroller(0)}}/>
                    <Button icon='arrow down' onClick={()=>{CameraCotroller(2)}}/>
                    <Button icon='arrow left'onClick={()=>{CameraCotroller(4)}}/>
                    <Button icon='arrow right' onClick={()=>{CameraCotroller(6)}}/>
                  </Button.Group>
                </div>
              </Segment>
          )
          })
        }
      </div>
    );
  }
};

export default Sites;
