import React, { Component } from 'react';
import styled from 'styled-components';

import { Grid, Col, Row } from 'brickworks';

const Segment = styled.div`
  border: 1px blue solid;
  text-align: center;
  padding: 20px;
`;

export default class App extends Component {
  render() {
    return (
      <div>
        <Grid as="main" style={{ height: '100vh' }}>
          <Row as="section" style={{ height: '100%' }}>
            <Col as="div" align="center">
              <Segment>1</Segment>
            </Col>
            <Col as="div">
              <Segment>2</Segment>
            </Col>
            <Col as="div">
              <Segment>3</Segment>
            </Col>
          </Row>
        </Grid>
        {/* <Grid>
          <Row as="section">
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
        <Grid justifyContent="space-between" padding="0 1em">
          <Col basis={20} padding={0}>
            <Segment>Grid without Row 20%</Segment>
          </Col>
          <Col basis={20} padding={0}>
            <Segment>Grid without Row 20%</Segment>
          </Col>
          <Col basis={20} padding={0}>
            <Segment>Grid without Row 20%</Segment>
          </Col>
          <Col basis={20} padding={0}>
            <Segment>Grid without Row 20%</Segment>
          </Col>
        </Grid>
        <Grid justifyContent="space-around" padding="0 1em">
          <Col basis={25} padding={0}>
            <Segment>Grid without Row 25%</Segment>
          </Col>
          <Col basis={40} padding={0}>
            <Segment>Grid without Row 40%</Segment>
          </Col>
          <Col basis={25} padding={0}>
            <Segment>Grid without Row 25%</Segment>
          </Col>
        </Grid>
        <Grid>
          <Row>
            <Col>
              <Segment>Grid without Row 30%</Segment>
            </Col>
            <Col>
              <Segment>Grid without Row 30%</Segment>
            </Col>
            <Col>
              <Segment>Grid without Row 30%</Segment>
            </Col>
          </Row>
          <Col grid basis="100%" justify="space-between" columns={3}>
            <Col style={{ paddingLeft: 0 }}>
              <Segment>1/3</Segment>
            </Col>
            <Col>
              <Segment>1/3</Segment>
            </Col>
            <Col style={{ paddingRight: 0 }}>
              <Segment>1/3</Segment>
            </Col>
          </Col>
        </Grid> */}
      </div>
    );
  }
}
