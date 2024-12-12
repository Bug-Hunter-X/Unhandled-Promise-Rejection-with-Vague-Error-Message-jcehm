# Unhandled Promise Rejection with Vague Error Message

This repository demonstrates a common yet frustrating issue in Node.js: unhandled promise rejections that result in vague error messages, making debugging difficult.  The original code includes a subtle promise handling error.  The solution demonstrates how to properly handle promises to avoid this problem.

## Bug

The original `server.js` file contains a simple HTTP server. However, it lacks proper error handling for promises, leading to an unhandled promise rejection when an error occurs (which is simulated here for demonstration).  The error message isn't helpful in pinpointing the source of the issue.

## Solution

The `serverSolution.js` file demonstrates the correct way to handle promises using `.catch()` to gracefully handle potential errors and provide more informative error messages.

## How to Reproduce the Bug

1. Clone this repository.
2. Navigate to the directory.
3. Run `node server.js`.
4. Observe the vague error message related to unhandled promise rejection.

## How to Fix the Bug

1. Refer to `serverSolution.js` for the corrected code.
2. Notice how promises are handled using `.catch()` to intercept and handle errors gracefully.
3. Run `node serverSolution.js` to see the improved error handling.