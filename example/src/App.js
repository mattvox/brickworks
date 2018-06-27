import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Grid, Row, Col } from 'brickworks';

const theme = {
  breakpoints: {
    sm: '400px',
    md: '700px',
    lg: '1000px',
    xl: '1030px',
  },
  justify: 'center',
};

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
      <ThemeProvider theme={theme}>
        <div>
          <Main>
            <Section xs={1} md={3}>
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
            <Row columns={2} style={{ backgroundColor: 'papayawhip' }}>
              <Col>
                <Segment>1</Segment>
              </Col>
              <Col>
                <Segment>2</Segment>
              </Col>
            </Row>
            <Row xs={1} md={2}>
              <Col grid>
                <Row columns={2}>
                  <Col>
                    <Segment style={{ minHeight: 50, backgroundColor: 'pink' }}>
                      Small Box
                    </Segment>
                  </Col>
                  <Col>
                    <Segment style={{ minHeight: 50, backgroundColor: 'pink' }}>
                      Small Box
                    </Segment>
                  </Col>
                  <Col>
                    <Segment style={{ minHeight: 50, backgroundColor: 'pink' }}>
                      Small Box
                    </Segment>
                  </Col>
                  <Col>
                    <Segment style={{ minHeight: 50, backgroundColor: 'pink' }}>
                      Small Box
                    </Segment>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Segment style={{ height: 160, backgroundColor: 'pink' }}>
                  Big Box
                </Segment>
              </Col>
            </Row>
            <Row>
              <Col flex={0}>
                <Segment style={{ height: 100, width: 100 }}>
                  Centered Box
                </Segment>
              </Col>
            </Row>
            <Row xs={1} sm={2} md={4}>
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
          </Main>
          <Grid style={{ backgroundColor: 'lightcyan' }} spacing={0.5}>
            <Row>
              <Col flex={5}>
                <Segment>1</Segment>
              </Col>
              <Col flex={4}>
                <Segment>2</Segment>
              </Col>
              <Col flex={3}>
                <Segment>3</Segment>
              </Col>
              <Col flex={2}>
                <Segment>4</Segment>
              </Col>
              <Col flex={1}>
                <Segment>5</Segment>
              </Col>
              <Col flex={0}>
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
              <Col grid alignItems="flex-end">
                <Row columns={3}>
                  <Col>
                    <Segment>Three Columns</Segment>
                  </Col>
                  <Col>
                    <Segment>Three Columns</Segment>
                  </Col>
                  <Col>
                    <Segment>Three Columns</Segment>
                  </Col>
                  <Col>
                    <Segment>Three Columns</Segment>
                  </Col>
                </Row>
              </Col>
            </Section>
            <Row columns={2}>
              <Col>
                <Segment>Inside Row</Segment>
              </Col>
              <Col grid>
                <Row columns={2}>
                  <Col>
                    <Segment>Inside Col Grid</Segment>
                  </Col>
                  <Col grid>
                    <Row columns={2}>
                      <Col>
                        <Segment>ICG</Segment>
                      </Col>
                      <Col>
                        <Segment>ICG</Segment>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
          <Grid style={{ backgroundColor: '#ccc' }}>
            <Row maxWidth={800}>
              <Col>
                <Segment>Centered Content</Segment>
              </Col>
              <Col>
                <Segment>Centered Content</Segment>
              </Col>
            </Row>
          </Grid>
        </div>
      </ThemeProvider>
    );
  }
}
