import React, { Component } from 'react';
import styled from 'styled-components';

import { Grid, Row, Col } from 'brickworks';

const Segment = styled.div`
  border: 2px gray solid;
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

const Aside = Col.aside;

const StyledAside = styled(Aside)`
  ${Segment} {
    background-color: palevioletred;
  }
`;

export default class App extends Component {
  render() {
    return (
      <div>
        <Main padded>
          <Col>
            <Segment>No Row</Segment>
          </Col>
          <Col>
            <Segment>Just Cols</Segment>
          </Col>
          <Section columns={3}>
            <StyledAside>
              <Segment>1</Segment>
            </StyledAside>
            <StyledAside>
              <Segment>2</Segment>
            </StyledAside>
            <StyledAside>
              <Segment>3</Segment>
            </StyledAside>
          </Section>
          <Row columns={2}>
            <Col>
              <Segment>1</Segment>
            </Col>
            <Col>
              <Segment>2</Segment>
            </Col>
          </Row>
          <Row columns={4}>
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
          </Row>
          <Row colFlex={1} style={{ backgroundColor: 'pink' }}>
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
          <Row colFlex={1}>
            <Col>
              <Segment>01</Segment>
            </Col>
            <Col>
              <Segment>02</Segment>
            </Col>
            <Col>
              <Segment>03</Segment>
            </Col>
            <Col>
              <Segment>04</Segment>
            </Col>
            <Col>
              <Segment>05</Segment>
            </Col>
            <Col>
              <Segment>06</Segment>
            </Col>
            <Col>
              <Segment>07</Segment>
            </Col>
            <Col>
              <Segment>08</Segment>
            </Col>
            <Col>
              <Segment>09</Segment>
            </Col>
            <Col>
              <Segment>10</Segment>
            </Col>
            <Col>
              <Segment>11</Segment>
            </Col>
            <Col>
              <Segment>12</Segment>
            </Col>
          </Row>
          <Section columns={2}>
            <Col grid>
              <Section columns={2} md={4}>
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
