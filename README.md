# 🔎 API Endpoint Batch Tester

API Endpoint Batch Tester is a simple browser-based tool that allows
testing multiple API endpoints in one go.

It sends requests to each endpoint and logs responses or failures
directly in the browser console.

---

## Overview

When testing APIs, developers often need to:
- Hit multiple endpoints
- Check responses quickly
- Identify which endpoints fail

This tool simplifies that process using a simple textarea input
and JavaScript fetch requests.

---

## Features

- Accepts multiple API endpoints as input
- Sends requests sequentially
- Logs successful responses
- Logs failed endpoints clearly
- Works directly in the browser
- No backend required

---

## How It Works

1. User enters API endpoints (one per line)
2. Script loops through each endpoint
3. Fetch request is sent
4. Response is logged to the console
5. Errors are handled gracefully

---

## Usage

1. Open the HTML file in a browser
2. Open Developer Console (F12)
3. Enter API endpoints in the textarea
4. Click **Run**
5. View responses in the console

---

## Use Cases

- API testing
- Debugging backend routes
- Learning how fetch works
- Understanding API responses
- Quick sanity checks during development

---

## Notes

- Assumes endpoints return JSON
- Runs in same-origin context unless CORS allows otherwise
- Intended for learning and debugging only

---

## Final Thoughts

Batch testing saves time.
Understanding responses saves bugs.
