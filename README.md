# hackathon-live-feed

A dashboard for displaying live-feed activity - Git commits, Tweets, and announcement - of participants in real-time. Built for the [RefactorU](http://www.refactoru.com/) Hackathon, which took place on April 18th, 2015.

**Staging**:
- [https://pacific-beach-3008.herokuapp.com/](https://pacific-beach-3008.herokuapp.com/)
- Dummy admin - email: ad@min.com/password: admin

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/RefactorU/hackathon-live-feed?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

[![Build Status](https://travis-ci.org/RefactorU/hackathon-live-feed.svg?branch=master)](https://travis-ci.org/RefactorU/hackathon-live-feed)

[![Coverage Status](https://coveralls.io/repos/RefactorU/hackathon-live-feed/badge.svg?branch=master)](https://coveralls.io/r/RefactorU/hackathon-live-feed?branch=master)

Here is the [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Quick Start

1. Clone
1. Install dependencies - `npm install`
1. Add environment variables (see *server/_config.js*)
1. Start the Mongo server
1. Run server - `nodemon`
1. Test - `mocha`
1. Coverage - `npm coverage`
1. Coverage report - `open coverage/lcov-report/index.html`

## Development Workflow

1. Create feature branch
1. Develop/test locally (hack! hack! hack!)
1. Create PR, which triggers Travis-CI
1. After tests pass, merge the PR
1. Tests run again on Travis-CI
1. Once tests pass, code is deployed automatically to staging server on Heroku

> Make sure to add tests with each PR. Your PR must **not** decrease the test coverage percentage.

## Features & Functionalities

* **Github authentication**
  * Sign-in code to limit to those who are at the event

* **Realtime feed of commits, pull requests, merges, new repo's, who's just joined**
  * Github API
  * Distinguish each with a different style because there will be a ton of commits, a bit more pull requests, and only a few merges
  * Throttle commits? i.e. not show ALL commits, just some
  * Anything else we want to show in the Github feed?

* **Integrate Twitter feed to allow guests & coders to Tweet**
  * Twitter API
  * Distinguish the host's posts

* **Personalization (save these to database)**
  * The hackathon host can create a title for the feed and upload a logo
  * Allow host to set a time to open the feed and to close it?

* **Sound effect on update**
  * Option to turn up or mute

* **Infinite scroll**

* **Show recent activity since last login**

* **Data visualization**
  * Number of Github commits / pushes per repo
  * d3
  * Convert the data visualization into images that the host can later use for social media, PR, etc.

* **Open/close settings**
  * Allow host to set a time to open the feed and to close it?

## Stack

* Issue Tracker: Github Issues
* Build System: Grunt, Gulp
* Testing: Mocha, Chai, Travis, Istanbul (coverage)
* Language Runtime: ES5
* Package Mgmt: npm, browserify
* Utility: Underscore
* Async: Bluebird
* Server: Node, Express
* Realtime: SocketIO
* Database: MongoDB/Mongoose
* Front End: Angular
* CSS Framework: Bootstrap
* CSS Preprocessor: Sass
* Templates: [Swig](http://paularmstrong.github.io/swig/)