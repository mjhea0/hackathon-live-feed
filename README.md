# hackathon-live-feed

> A dashboard for displaying git activity of participants in real-time.

Staging: [https://pacific-beach-3008.herokuapp.com/](https://pacific-beach-3008.herokuapp.com/)

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/RefactorU/hackathon-live-feed?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

[![Build Status](https://travis-ci.org/RefactorU/hackathon-live-feed.svg?branch=master)](https://travis-ci.org/RefactorU/hackathon-live-feed)

[![Coverage Status](https://coveralls.io/repos/RefactorU/hackathon-live-feed/badge.svg)](https://coveralls.io/r/RefactorU/hackathon-live-feed)

Here is the [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Quick Start

1. Clone
1. Install dependencies (`npm install` will run automatically when you run `npm start`)
1. Add environment variables (see *_config.js*)
1. Start the Mongo server
1. Run server - `nodemon`
1. Test - `mocha`
1. Coverage - `istanbul cover _mocha -- test/ -R spec`
1. Coverage report - `open coverage/lcov-report/index.html`

## Purpose

* Create a Github live-feed application that can be displayed at the RefactorU Hackathon on April 4th, showing all commits/pull requests/merges on different projects.
* Make it reuseable for future hackathon hosters (like schools, companies, etc.)

## Due Date

The Hackathon date is set for **April 4th.**
We should probably allow for a week of final testing **(Saturday, March 28th)**

## Development Workflow

1. Create feature branch
1. Develop/test locally (hack!)
1. Create PR
1. PR triggers Travis-CI
1. After tests pass, merge the PR (see below for details)
1. Tests run again on Travis-CI
1. Once tests pass, code is deployed automatically to staging server on Heroku

## Merge Protocol

* Don't merge your own pull requests ("PR")
* Each pull request should have **at least 2 people** check it out before merging* please comment to let us know you looked it over
* If you have a suggestion or want clarification on a specific part of someone's pull request, please comment on that line in their PR. You can comment on specific lines by going to the Files Changed tab, hovering on a line, then clicking the blue + button

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
* Build System: Grunt
* Testing: Mocha, Chai, Travis
* Language Runtime: ES5
* Package Mgmt: npm, browserify
* Utility: Underscore
* Async: Bluebird
* Server: Node, Express
* Realtime: SocketIO
* Database: MongoDB/Mongoose
* Front End Framework: Angular
* CSS Framework: Bootstrap
* CSS Preprocessor: Sass
* Templates: [Swig](http://paularmstrong.github.io/swig/)