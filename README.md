# brickworks

[![Build Status](https://travis-ci.org/mattvox/brickworks.svg?branch=master)](https://travis-ci.org/mattvox/brickworks) [![Coverage Status](https://coveralls.io/repos/github/mattvox/brickworks/badge.svg?branch=master)](https://coveralls.io/github/mattvox/brickworks?branch=master)
[![NPM](https://img.shields.io/npm/v/brickworks.svg)](https://www.npmjs.com/package/brickworks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> ### Lightweight, dynamic, simple, and _styled_ grid layouts for React

# Still a WIP!!! Do not use this yet! Documentation and release coming soon :)

## Summary

Brickworks is lightweight layout tool for use with React and Styled Components, which exposes a handful of components to help build and manage layouts, saving you and your team time and most importantly sanity.

Brickworks is designed to be incredibly user-friendly and easy to use. This is accomplished through smart defaults and an extremely focused philosophy. Brickworks is ONLY concerned with layout, nothing else, and aims to avoid conflicting with other libraries or styling choices as much as possible.

## Install

```bash
yarn add brickworks
```

Brickworks makes use of a modest list of peer dependencies, including React, Prop Types, and Styled Components. Make sure to install those too.

```bash
yarn add react prop-types styled-components
```

Or with NPM

```bash
npm install --save brickworks
```

```bash
npm install --save react prop-types styled-components
```

## Getting Started

```jsx
import React, { Component } from 'react';
import { Grid, Row, Col } from 'brickworks';

class Example extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col />
          <Col />
          <Col />
        </Row>
      </Grid>
    );
  }
}
```

## `<Grid />`

Grid is a container component, typically managing a combination of rows and columns.

| Prop          | Default      | Type   | Description                                                                                                                                                                                       |
| ------------- | ------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `flow`        | `row wrap`   | enum   | shorthand for flex-direction and flex-wrap, which define the container's axes. enums: `row` `row-reverse` `column` `column-reverse` `nowrap` `wrap` `wrap-reverse` `row nowrap` etc etc fix later |
| `justify`     | `flex-start` | enum   | sets alignment of items along the main axis. enums: `flex-start` `flex-end` `center` `space-around` `space-between` `space-evenly`                                                                |
| `align`       | `stretch`    | enum   | sets alignment of the container's lines along the cross-axis. enums: `flex-start` `flex-end` `center` `space-around` `space-between` `stretch`                                                    |
| `items`       | `stretch`    | enum   | sets alignment of items along the cross-axis. enums: `flex-start` `flex-end` `center` `baseline` `stretch`                                                                                        |
| `childFlex`   |              | FIX    |
| `padded`      |              |        |
| `columns`     |              |        |
| `xs`          |              |        |
| `sm`          |              |        |
| `md`          |              |        |
| `lg`          |              |        |
| `xl`          |              |        |
| `breakpoints` |              | object |

## `<Row />`

Grid is a container component, typically managing a combination of rows and columns.

## `<Col />`

Grid is a container component, typically managing a combination of rows and columns.

## License

MIT © [mattvox](https://github.com/mattvox)
