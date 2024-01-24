# formedixactivity
This is the formedix activity for the QA Position Job Application


## Overview

These automation scripts are built with JavaScript and utilizes the Playwright framework. The scripts follow the Page Object Model approach, where elements and actions are declared in dedicated page files, making it easy for users to add or modify functionality in specific spec files.

## Page Files

Two essential page files have been declared for better organization and maintainability:

1. `login.page.js`: Contains elements and actions related to the login functionality.
2. `repository.page.js`: Includes elements and actions specific to repository-related activities.

FYI: beforeEach and afterEach functions handles the login and logout functionality respectively

## Getting Started

To run the scripts, you need to install Playwright. Checkout the repo and execute the following command to install Playwright:

"npx playwright install"

## Test Script

The main test script is located in the "tests" folder with the filename:

repository.spec.js

## Running Tests

** Disclaimer: Before you proceed, the test is expected to fail on the part where the user updates the description property IF there is already an existing description for the medical history. I haven't added any function/user action to automatically delete the existing description since it's not included in the the instruction. If you intend to get a 100% passing result, kindly delete any existing description first in the medical history form and then run the tests**


There are two ways to run the test script:

"npx playwright test" (This command runs the test on headless browser mode)
"npx playwright test --headed" (This command runs the test on headed browser mode)

## Test Run Results

To view the latest test run results, you can use the following command:

"npx playwright show-report"






