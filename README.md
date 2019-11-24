# UI Automation



### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

#### Prerequisites

- [Node](https://nodejs.org/en/) _(see [`.npmrc`](.npmrc) for version no)_

#### Installing

Open a command line of your choice and do the following:

1. Clone the repository and `cd` into the project:

   ```bash
   git clone git@github.com:gans79/
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Duplicate `.env.example` and name `.env`. Add an api key.


### Visual Studio Code

#### Settings

If you're using Visual Studio Code (VSC), like most of us are, then the most crucial settings will be provided for you via [`.vscode/settings.json`](.vscode/settings.json).

On top of our lint tooling ([ESLint](https://eslint.org/), [stylelint](https://stylelint.io/), [Prettier](https://prettier.io/), etc) this is an extra layer to ensure we're all writing highly consistent code and keeping our code reviews highly focused.

#### Extensions

In addition to [**Settings**](#settings), there are also suggestions for extensions that further bolster code consistency and to ensure our aforemention lint tooling can be as effecient as possible.



## TestCafe

### How to Run TestCafe

1. Update your `BASE_URL` in `.env` file with your desired URL, e.g.:

   ```bash
   BASE_URL=https://www.qantas.com/au/en.html
   ```

2. Run tests: Execute with npm script:

   ```bash
   Execute all tests in all browsers: npm run testcafe
   Execute all tests in chrome: npm run testcafe:chrome
   Execute all tests in safari: npm run testcafe:safari
   Execute all tests in headless mode: npm run testcafe:headless
   ```



### Other Useful Commands

- Execute specific test scenario:

  ```bash
  testcafe <browser_name||all||headless> tests/**/*.test.js --test-meta testID=T* "TEST SCENARIO DESCRIPTION REGEX"

  <Example>
  testcafe chrome tests/**/*.test.js -T "BASE_URL='https://www.qantas.com/au/en.html' node_modules/.bin/testcafe chrome tests/fixtures --test-meta testID=T101 "
  ```
