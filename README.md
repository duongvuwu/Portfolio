# Duongvuwu Portfolio

A one-page portfolio of web applications, AI prototypes, and interactive software. The English copy and project links live in [src/portfolio.js](src/portfolio.js).

## Local development

The lockfile was verified with Node 24.14.0 and npm 11.9.0.

```sh
npm ci
npm start
```

Open [the local app](http://localhost:3000/Portfolio/).

## Production build and tests

```sh
npm run build
npm test -- --watchAll=false
```

Create React App writes the static site to `build/` with asset URLs rooted at `/Portfolio/`. Mount that directory at `/Portfolio/` on a static host to exercise the production URLs and section links.

The Jest globs omit the absolute checkout path so tests are discovered in Windows worktrees under a dot-prefixed directory.

## Attribution

The repository began as a fork of [Soumyajit Behera’s Portfolio template](https://github.com/soumyajit4419/Portfolio).

[Bricolage Grotesque](https://github.com/ateliertriay/bricolage) is distributed under the [SIL Open Font License 1.1](public/fonts/bricolage-grotesque-OFL.txt).
