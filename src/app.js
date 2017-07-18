import React, { Component } from 'react';
import {Row, Col, Form, FormGroup, FormControl, ControlLabel, Radio, Checkbox, Button} from 'react-bootstrap';
import '../styles/app.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:""
        }
    }
  render() {
    return (
      <div className="App container-fluid">
        <Row>
            <Col xs={12} md={12} lg={12}><h1 className="form-title"><strong>Survey Form</strong></h1></Col>
        </Row>
        <Row>
            <Col xs={12} md={12} lg={12} className="form-title">Let us know how we can Improve</Col>
            <Col xs={12} md={12} lg={12}>
                <Form horizontal>

                    {/*user name*/}
                    <FormGroup controlId="formName">
                        <Col componentClass={ControlLabel} sm={5}>
                            Name:
                        </Col>
                        <Col sm={4}>
                            <FormControl type="name" placeholder="Enter your name"></FormControl>
                        </Col>
                    </FormGroup>

                    {/*email*/}
                    <FormGroup controlId="formEmail">
                        <Col componentClass={ControlLabel} sm={5}>
                            E-mail:
                        </Col>
                        <Col sm={4}>
                            <FormControl type="email" placeholder="Enter your e-mail "></FormControl>
                        </Col>
                    </FormGroup>

                    {/*age*/}
                    <FormGroup controlId="formAge">
                        <Col componentClass={ControlLabel} sm={5}>
                            Age:
                        </Col>
                        <Col sm={4}>
                            <FormControl type="number" placeholder="Enter your age" step="1"></FormControl>
                        </Col>
                    </FormGroup>

                    {/* select */}
                    <FormGroup controlId="formControlsSelect">
                        <Col componentClass={ControlLabel} sm={5}>
                            <ControlLabel>What options best describe your current role?</ControlLabel>
                        </Col>
                        <Col sm={2}>
                            <FormControl componentClass="select" placeholder="select">
                                <option value="select">Select</option>
                                <option value="student" selected>Student</option>
                                <option value="fulltime">Full Time job</option>
                                <option value="learner">Full Time Learner</option>
                                <option value="noSay">Prefer not to say</option>
                                <option value="other">Other</option>
                            </FormControl>
                        </Col>
                    </FormGroup>

                    {/* radio buttons*/}
                    <FormGroup controlId="formControlsRadio">
                        <Col componentClass={ControlLabel} sm={5}>
                            <ControlLabel>
                                How likely is that you would recommend this forum to a friend?
                            </ControlLabel>
                        </Col>
                        <Col sm={2 } className="radio-group" >
                                    <Radio name="radioGroup" >
                                        Definetly
                                    </Radio>
                                    <Radio name="radioGroup" >
                                        May be
                                    </Radio>
                                    <Radio name="radioGroup" >
                                        Not sure
                                    </Radio>
                        </Col>
                    </FormGroup>
                    {/* Select options*/}
                    <FormGroup controlId="formControlsSelect">
                        <Col componentClass={ControlLabel} sm={5}>
                            <ControlLabel>What options best describe your current role?</ControlLabel>
                        </Col>
                        <Col sm={2}>
                            <FormControl componentClass="select" placeholder="select">
                                <option value="challenges">Challenges</option>
                                <option value="projects" selected>Projects</option>
                                <option value="community">Community</option>
                                <option value="openSource">open Source</option>
                                <option value="all">All</option>
                            </FormControl>
                        </Col>
                    </FormGroup>

                    {/* Check boxes*/}
                    <FormGroup controlId="formControlsCheckbox">
                        <Col componentClass={ControlLabel} sm={5}>
                            <ControlLabel>
                                Things that should be improved in the future <br></br>
                                (Check all that apply):
                            </ControlLabel>
                        </Col>
                        <Col sm={4 } className="radio-group" >
                                    <Checkbox >
                                        Front-end Projects
                                    </Checkbox>
                                    <Checkbox  >
                                        Back-end Projects
                                    </Checkbox>
                                    <Checkbox  >
                                        Challenges
                                    </Checkbox>
                                    <Checkbox  >
                                        Open Source Community
                                    </Checkbox>
                                    <Checkbox  >
                                        Gitter help rooms
                                    </Checkbox>
                                    <Checkbox  >
                                        Videos
                                    </Checkbox>
                                    <Checkbox  >
                                        City Meetups
                                    </Checkbox>
                                    <Checkbox  >
                                        Wiki
                                    </Checkbox>
                                    <Checkbox  >
                                        Forum
                                    </Checkbox>
                                    <Checkbox  >
                                        Additional Courses
                                    </Checkbox>
                        </Col>
                    </FormGroup>
                    {/*user comments*/}
                    <FormGroup controlId="formControlsTextarea">
                        <Col componentClass={ControlLabel} sm={5}>
                            Any comments or suggestions:
                        </Col>
                        <Col sm={4}>
                            <FormControl componentClass="textarea" placeholder="Enter your comment here ..."></FormControl>
                        </Col>
                    </FormGroup>
                    <Button type="submit" bsSize="large">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>

    </div>
    );
  }
}

export default App;
