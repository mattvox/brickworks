# brickworks

> Lightweight, dynamic, zero-dependency grid layouts for React

[![Build Status](https://travis-ci.org/mattvox/brickworks.svg?branch=master)](https://travis-ci.org/mattvox/brickworks) [![Coverage Status](https://coveralls.io/repos/github/mattvox/brickworks/badge.svg?branch=master)](https://coveralls.io/github/mattvox/brickworks?branch=master)
[![NPM](https://img.shields.io/npm/v/brickworks.svg)](https://www.npmjs.com/package/brickworks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Still a WIP!!! Do not use this yet! Documentation and release coming soon :)

## Install

```bash
npm install --save brickworks
```

## Usage

```jsx
import React, { Component } from 'react';

import { Grid, Row, Col } from 'brickworks';

class Example extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col>1</Col>
          <Col>2</Col>
          <Col>3</Col>
        </Row>
      </Grid>
    );
  }
}
```

## License

MIT © [mattvox](https://github.com/mattvox)
