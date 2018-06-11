import React, { Component } from 'react';
import styled from 'styled-components';

import { Grid, Col, Row } from 'brickworks';

const Segment = styled.div`
  border: 1px blue solid;
  text-align: center;
  padding: 20px;
  ${'' /* margin: 20px; */};
`;

// Col.section = Col.withComponent('section');

export default class App extends Component {
  render() {
    return (
      <div>
        <Grid
          margin="1em"
          style={{ border: '1px solid green' }}
          maxWidth={1200}
          centered
          columns={2}
          padded
        >
          <Col>
            <Segment>Test</Segment>
          </Col>
          <Col>
            <Segment>Test</Segment>
          </Col>
          <Row
            xs={1}
            sm={3}
            xl={3}
            justifyContent="space-around"
            className="row"
          >
            <Col>
              <Segment>1</Segment>
            </Col>
            <Col>
              <Segment>2</Segment>
            </Col>
            <Col>
              <Segment>3</Segment>
            </Col>
          </Row>
          <Row>
            <Col flex={1} className="flexing-hard">
              <Segment>1</Segment>
            </Col>
            <Col>
              <Segment>2</Segment>
            </Col>
          </Row>
          <Row columns={3}>
            <Col>
              <Segment>1</Segment>
            </Col>
            <Col>
              <Segment>2</Segment>
            </Col>
            <Col>
              <Segment>3</Segment>
            </Col>
            <Col>
              <Segment>4</Segment>
            </Col>
            <Col>
              <Segment>5</Segment>
            </Col>
            <Col>
              <Segment>6</Segment>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
