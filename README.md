# brickworks

[![Build Status](https://travis-ci.org/mattvox/brickworks.svg?branch=master)](https://travis-ci.org/mattvox/brickworks) [![Coverage Status](https://coveralls.io/repos/github/mattvox/brickworks/badge.svg?branch=master)](https://coveralls.io/github/mattvox/brickworks?branch=master)
[![NPM](https://img.shields.io/npm/v/brickworks.svg)](https://www.npmjs.com/package/brickworks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> ### Lightweight, dynamic, simple, and _styled_ grid layouts for React

#### Disclaimer: Documentation still a work in progress. Full documentation and example site coming with the v1 release, which is very, very soon. Enjoy :)

## Overview

Brickworks is a lightweight layout tool, implementing the full Flexbox specification, for use with React and Styled Components. Brickworks exposes a small handful of components to help build and manage consistent layouts, saving you and your team time and most importantly sanity.

Brickworks is designed to be incredibly user-friendly and easy to use, drawing on conventions present in similar CSS frameworks (such as grids, rows, and columns) that almost all developers are already familiar with. This is accomplished through smart defaults and an extremely focused philosophy.

What sets Brickworks apart from the others is its commitment to ONLY be concerned with layout, nothing else. It aims to avoid conflicting with other libraries or styling choices as much as possible and provides the full Flexbox specification through props as an escape hatch for complex layouts that cannot be achieved through shortcuts and smart defaults.

#### TL;DR - Beautiful, consistent, and easy to build layouts with a handful of props, and the full Flexbox specification when you need it.

## Why Use Brickworks

- #### Dynamic
- #### Lightweight (~2kb gzipped)

* #### Fully-typed props with > 99% test coverage

- #### Responsive and mobile-first
- #### Focused, only concerned with layout
- #### Fast and efficient workflow
- #### Smart, easy to understand conventions
- #### Almost no learning curve
- #### No giant config required
- #### Plays well with others

## Install

```bash
yarn add brickworks
# or with npm
npm install --save brickworks
```

Brickworks makes use of a modest list of peer dependencies, including Prop Types, and Styled Components. Make sure to install those too.

```bash
yarn add react prop-types styled-components
# or with npm
npm install --save prop-types styled-components
```

## Getting Started

#### The most basic grid setup

Creates a basic grid with one row and three columns. By default, Brickworks makes no assumptions when it comes to padding or margin. Without any props, you simply get the Flexbox defaults, with Grid representing a container, and the child Col components its items.

```jsx
import React, { Component } from 'react';
import { Grid, Row, Col } from 'brickworks';

class Example extends Component {
  render() {
    return (
      <Grid>
        <Col />
        <Col />
        <Col />
      </Grid>
    );
  }
}
```

#### Responsive three-column layout with gutters

The `Row` component can be added to introduce another level of control over its child `Col` components, enabling quick and easy creation of more complex layouts. With a few props we now have three equal-width columns with a `1em` gutter.

```jsx
<Grid padded>
  <Row columns={3}>
    <Col />
    <Col />
    <Col />
  </Row>
</Grid>
```

#### Responsive three-column layout with gutters, but centered with a maximum width

We can also give our grid a max width and center it automatically by passing it the `maxWidth` and `centered` prop.

```jsx
<Grid centered maxWidth={1000} padded>
  <Row columns={3}>
    <Col />
    <Col />
    <Col />
  </Row>
</Grid>
```

#### Responsive layout with media queries

Brickworks also makes working with different breakpoints a breeze. Our basic grid setup now renders its child `Col` components at different widths based on media breakpoints, still maintaining equal spacing and widths.

By default, child `Col` components will stack or wrap based on the column count at each breakpoint. In this example with six columns, we'll get two rows of equally-spaced `Col` components on medium-sized screens or larger, three rows of two columns on small screens, and six rows of one column on extra small screens.

```jsx
<Grid centered maxWidth={1000} padded>
  <Row xs={1} sm={2} md={3}>
    <Col />
    <Col />
    <Col />
    <Col />
    <Col />
    <Col />
  </Row>
</Grid>
```

## Props

Brickworks layout components are configured through props. It aims to make available all the configuration necessary to create beautiful and complex layouts without any additional 'clutter'. All Brickworks components are composed with a base set of 'style' props available any component in the library.

| Prop        | Default | Type            | Description                                                                          |
| ----------- | ------- | --------------- | ------------------------------------------------------------------------------------ |
| `left`      |         | bool            | sets the alignment to the left                                                       |
| `right`     |         | bool            | sets the alignment to the right                                                      |
| `center`    |         | bool            | centers the component                                                                |
| `minWidth`  |         | number / string | set the minimum width                                                                |
| `maxWidth`  |         | number / string | set the maximum width                                                                |
| `minHeight` |         | number / string | set the minimum height                                                               |
| `maxHeight` |         | number / string | set the maximum height                                                               |
| `textAlign` |         | enum            | set the text alignment. enums: `left` `right` `center` `justify` `initial` `inherit` |

## `<Grid />`

Grid is a container component, typically managing a combination of rows and columns.

| Prop           | Default   | Type                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------- | --------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `flow`         | `inherit` | enum                   | shorthand for flex-direction and flex-wrap, which define the container's axes. enums: `row` `row-reverse` `column` `column-reverse` `nowrap` `wrap` `wrap-reverse` `row nowrap` `row wrap` `row wrap-reverse` `row-reverse nowrap` `row-reverse wrap` `row-reverse wrap-reverse` `column nowrap` `column wrap` `column wrap-reverse` `column-reverse nowrap` `column-reverse wrap` `column-reverse wrap-reverse` `initial` `inherit` |
| `justify`      | `inherit` | enum                   | sets alignment of items along the main axis. enums: `flex-start` `flex-end` `center` `space-around` `space-between` `space-evenly` `initial` `inherit`                                                                                                                                                                                                                                                                               |
| `alignContent` | `inherit` | enum                   | sets alignment of the container's lines along the cross-axis. enums: `flex-start` `flex-end` `center` `space-around` `space-between` `stretch` `initial` `inherit`                                                                                                                                                                                                                                                                   |
| `alignItems`   | `inherit` | enum                   | sets alignment of items along the cross-axis. enums: `flex-start` `flex-end` `center` `baseline` `stretch` `initial` `inherit`                                                                                                                                                                                                                                                                                                       |
| `padded`       | `1em`     | bool / number / string | A grid can be padded, which creates equally spaced gutters both horizontally and vertically. `padded` can be used simply as a boolean to apply the default padding, or as a number or string which is a valid css value with a unit, i.e. `'20px'`, `'1.5rem'`                                                                                                                                                                       |
| `colFlex`      |           | number / array         | sets the flex value for its child columns.                                                                                                                                                                                                                                                                                                                                                                                           |
| `columns`      |           | number                 | A grid can specify its column count.                                                                                                                                                                                                                                                                                                                                                                                                 |
| `xs`           |           | number                 | A grid can specify its column count for extra-small screens. Brickworks' mobile-first approach makes this the default, so no media query exists for the smallest setting. This is effectively equal to setting the `columns` prop, but provides a more semantic and readable option when utilizing other sizing props on the same component.                                                                                         |
| `sm`           |           | number                 | A grid can specify its column count for small screens. default: `(min-width: 576px)`                                                                                                                                                                                                                                                                                                                                                 |
| `md`           |           | number                 | A grid can specify its column count for medium-sized screens. default `(min-width: 768px)`                                                                                                                                                                                                                                                                                                                                           |
| `lg`           |           | number                 | A grid can specify its column count for large screens. default: `(min-width: 992px)`                                                                                                                                                                                                                                                                                                                                                 |
| `xl`           |           | number                 | A grid can specify its column count for small screens. default: `(min-width: 1200px)`                                                                                                                                                                                                                                                                                                                                                |
| `breakpoints`  |           | object                 | A grid can specify its own breakpoints to be used within various media queries. _needs more docs_                                                                                                                                                                                                                                                                                                                                    |

## `<Row />`

Row is both a container component and an item component, typically used to manage child columns, but within a container.

| Prop           | Default   | Type                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------- | --------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `flow`         | `inherit` | enum                   | shorthand for flex-direction and flex-wrap, which define the container's axes. enums: `row` `row-reverse` `column` `column-reverse` `nowrap` `wrap` `wrap-reverse` `row nowrap` `row wrap` `row wrap-reverse` `row-reverse nowrap` `row-reverse wrap` `row-reverse wrap-reverse` `column nowrap` `column wrap` `column wrap-reverse` `column-reverse nowrap` `column-reverse wrap` `column-reverse wrap-reverse` `initial` `inherit` |
| `justify`      | `inherit` | enum                   | sets alignment of items along the main axis. enums: `flex-start` `flex-end` `center` `space-around` `space-between` `space-evenly` `initial` `inherit`                                                                                                                                                                                                                                                                               |
| `alignContent` | `inherit` | enum                   | sets alignment of the container's lines along the cross-axis. enums: `flex-start` `flex-end` `center` `space-around` `space-between` `stretch` `initial` `inherit`                                                                                                                                                                                                                                                                   |
| `alignItems`   | `inherit` | enum                   | sets alignment of items along the cross-axis. enums: `flex-start` `flex-end` `center` `baseline` `stretch` `initial` `inherit`                                                                                                                                                                                                                                                                                                       |
| `padded`       | `1em`     | bool / number / string | A row can be padded, which creates equally spaced gutters both horizontally and vertically. `padded` can be used simply as a boolean to apply the default padding, or as a number or string which is a valid css value with a unit, i.e. `'20px'`, `'1.5rem'`                                                                                                                                                                        |
| `colFlex`      |           | number / array         | sets the flex value for its child columns.                                                                                                                                                                                                                                                                                                                                                                                           |
| `columns`      |           | number                 | A row can specify its column count.                                                                                                                                                                                                                                                                                                                                                                                                  |
| `xs`           |           | number                 | A row can specify its column count for extra-small screens. Brickworks' mobile-first approach makes this the default, so no media query exists for the smallest setting. This is effectively equal to setting the `columns` prop, but provides a more semantic and readable option when utilizing other sizing props on the same component.                                                                                          |
| `sm`           |           | number                 | A row can specify its column count for small screens. default: `(min-width: 576px)`                                                                                                                                                                                                                                                                                                                                                  |
| `md`           |           | number                 | A row can specify its column count for medium-sized screens. default `(min-width: 768px)`                                                                                                                                                                                                                                                                                                                                            |
| `lg`           |           | number                 | A row can specify its column count for large screens. default: `(min-width: 992px)`                                                                                                                                                                                                                                                                                                                                                  |
| `xl`           |           | number                 | A row can specify its column count for small screens. default: `(min-width: 1200px)`                                                                                                                                                                                                                                                                                                                                                 |
| `breakpoints`  |           | object                 | A row can specify its own breakpoints to be used within various media queries. _needs more docs_                                                                                                                                                                                                                                                                                                                                     |
| `order`        | `0`       | number                 | sets the order in which the row will appear.                                                                                                                                                                                                                                                                                                                                                                                         |

## `<Col />`

Col is an item component, typically used to wrap content inside a grid or row.

| Prop        | Default    | Type           | Description                                                                                                                                                                                                                                 |
| ----------- | ---------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `flex`      | `0 1 auto` | number / array | sets the flex property, which is shorthand for grow, shrink, and basis. Can simply accept a number, which sets the grow value, or an array containing grow and shrink, or all three values. Omitted values will fall back to their defaults |
| `alignSelf` |            | enum           | overrides the vertical alignment set by align-items in the parent container for a single element. enums: `auto`, `flex-start`, `flex-end`, `center`, `baseline`, `stretch`, `initial`, `inherit`                                            |
| `order`     | `0`        | number         | sets the order in which the row will appear                                                                                                                                                                                                 |

## License

MIT © [mattvox](https://github.com/mattvox)
