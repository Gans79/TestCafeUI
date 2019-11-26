# UI Automation



### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

#### Prerequisites

- [Node](https://nodejs.org/en/) _(see [`.npmrc`](.npmrc) for version no)_
- [Testcafe] npm install -g testcafe

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

3. Duplicate `.env.example` and name `.env`. Add an baseurl.

## TestCafe

### How to Run TestCafe

1. Update your `BASE_URL` in `.env` file with your desired URL, e.g.:

   ```bash
   BASE_URL=https://www.qantas.com/au/en.html
   ```

2. Run tests: All Tests

   ```bash
   Execute all tests in chrome: testcafe chrome tests/fixtures/**/*.test.js
   Execute all tests in safari: testcafe safari tests/fixtures/**/*.test.js
   ```

3. Run specific tests using TestID

  ```bash
  "BASE_URL='https://www.qantas.com/au/en.html' node_modules/.bin/testcafe chrome tests/fixtures --test-meta testID=T101 "
  ```