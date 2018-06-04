import React, { Component } from 'react';
import styled from 'styled-components';

import { Grid, Col, Row } from 'brickworks';

// const Section = Grid.withComponent('section');
// Grid.section = Grid.withComponent('section');

const Segment = styled.div`
  border: 1px blue solid;
  text-align: center;
  padding: 20px;
`;

export default class App extends Component {
  render() {
    console.log('rendered');
    return (
      <div>
        <Grid>
          <Row>
            <Col flex={{ grow: 0, shrink: 1, basis: 50 }}>
              <Segment>1/2</Segment>
            </Col>
            <Col flex={{ grow: 0, shrink: 1, basis: 50 }}>
              <Segment>1/2*</Segment>
            </Col>
          </Row>
          <Row columns={3}>
            <Col>
              <Segment>1/3</Segment>
            </Col>
            <Col>
              <Segment>1/3</Segment>
            </Col>
            <Col>
              <Segment>1/3*</Segment>
            </Col>
          </Row>
          <Row columns={4}>
            <Col>
              <Segment>1/4</Segment>
            </Col>
            <Col>
              <Segment>1/4</Segment>
            </Col>
            <Col>
              <Segment>1/4</Segment>
            </Col>
            <Col>
              <Segment>1/4*</Segment>
            </Col>
          </Row>
          <Row columns={5}>
            <Col>
              <Segment>1/5</Segment>
            </Col>
            <Col>
              <Segment>1/5</Segment>
            </Col>
            <Col>
              <Segment>1/5</Segment>
            </Col>
            <Col>
              <Segment>1/5</Segment>
            </Col>
            <Col>
              <Segment>1/5*</Segment>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Col padding={0}>
            <Segment>Grid without Row</Segment>
          </Col>
        </Grid>
      </div>
    );
  }
}
