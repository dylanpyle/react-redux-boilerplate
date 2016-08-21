# react-redux-boilerplate

[![CircleCI](https://circleci.com/gh/dylanpyle/react-redux-boilerplate.svg?style=svg)](https://circleci.com/gh/dylanpyle/react-redux-boilerplate)

A personal starting point for new projects in React/Redux. Clone and go.

Principles:

- Batteries included
- Fast
- Relatively light on dependencies (...ish)

Stack:

- react
- redux
- postcss
- webpack
- babel
- tape
- eslint

## Prerequisites

- node.js (v6+)

## Usage

### Local development server

```bash
$ make serve
```

### Build production-ready bundle

```bash
$ make build
```

### Testing / Linting

```bash
$ make test
$ make lint
```

### Run a single test file

```bash
$ bin/tt src/components/loader/spec.jsx
```

## License

MIT
