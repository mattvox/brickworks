import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Grid, Col, Row } from 'brickworks';

const Segment = styled.div`
  border: 2px gray solid;
  border-radius: 8px;
  text-align: center;
  padding: 20px;
`;

const Main = styled(Grid.main)`
  border: 2px solid green;
`;

const Section = styled(Row.section)`
  ${Segment} {
    background-color: papayawhip;
  }
`;

export default class App extends Component {
  render() {
    return (
      <div>
        <Main centered padded={2}>
          <Col>
            <Segment>No Row</Segment>
          </Col>
          <Col>
            <Segment>Just Cols</Segment>
          </Col>
          <Section columns={3}>
            <Col>
              <Segment>1</Segment>
            </Col>
            <Col>
              <Segment>2</Segment>
            </Col>
            <Col>
              <Segment>3</Segment>
            </Col>
          </Section>
          <Row>
            <Col>
              <Segment>1</Segment>
            </Col>
            <Col>
              <Segment>2</Segment>
            </Col>
          </Row>
          <Row>
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
          <Section columns={2}>
            <Col grid>
              <Section columns={4}>
                <Col>
                  <Segment>Col Grid</Segment>
                </Col>
                <Col>
                  <Segment>Col Grid</Segment>
                </Col>
                <Col>
                  <Segment>Col Grid</Segment>
                </Col>
                <Col>
                  <Segment>Col Grid</Segment>
                </Col>
              </Section>
            </Col>
            <Col grid columns={2}>
              <Col>
                <Segment>Only Cols</Segment>
              </Col>
              <Col>
                <Segment>Only Cols</Segment>
              </Col>
            </Col>
          </Section>
        </Main>
        {/* <Grid
          margin="1em"
          style={{ border: '1px solid green' }}
          maxWidth={1200}
          columns={2}
          padded
          centered
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
        </Grid> */}
      </div>
    );
  }
}
