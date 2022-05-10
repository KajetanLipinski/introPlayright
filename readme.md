# Main info

It's a basic model of usage Playwright framework with typescript.

## Installation

If you don't have playwright you can go to:

[Installation](https://playwright.dev/docs/intro#installation)

To run test use this command:
```bash
npx playwright test
```

## Usage

Main configuration is in file:

- playwright.config.ts

To run tests I use chromium and turned off headless option.


All test is in file:
- applause.spec.ts

To write this tests I used Page Object Model and split objects to:

- LoginPage where I handle Zoom pop up to autheticate

- HomePage where I handle all elements from unauthorize site

- MainPage where I handle add new event and Deleted event

To be sure my test is passed correctly I make screenshots after all main steps. 