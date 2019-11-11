# hackernews-async-ts

[Hacker News](https://news.ycombinator.com/) showcase using typescript && egg

## QuickStart

### Development

```bash
$ npm install yarn -g
$ yarn install
$ yarn run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ yarn run tsc
$ yarn start
```

### Npm Scripts

- Use `yarn run lint` to check code style
- Use `yarn test` to run unit test
- se `yarn run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+
