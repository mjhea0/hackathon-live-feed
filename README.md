# hackathon-live-feed

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/RefactorU/hackathon-live-feed?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

> A dashboard for displaying git activity of participants in real-time.

Here is the [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Purpose

* Create a Github live-feed application that can be displayed at the RefactorU Hackathon on April 4th, showing all commits/pull requests/merges on different projects.
* Make it reuseable for future hackathon hosters (like schools, companies, etc.)

## Due Date

The Hackathon date is set for **April 4th.**
We should probably allow for a week of final testing **(Saturday, March 28th)**

## Merge Protocol

* Don't merge your own pull requests ("PR")
* Each pull request should have **at least 2 people** check it out before merging* please comment to let us know you looked it over
<<<<<<< HEAD
* If you have a suggestion or want clarification on a specific part of someone's pull request, please comment on that line in their PR. You can comment on specific lines by going to the Files Changed tab, hovering on a line, then clicking the blue + button
=======
* If you have a suggestion or want clarification on a specific part of someone's pull request, please comment on that line in their PR. You can comment on specific lines by going to the Files Changed tab, hovering on a line, then clicking the blue + button
>>>>>>> upstream/master

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
<<<<<<< HEAD

=======

>>>>>>> upstream/master
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


<<<<<<< HEAD
=======

>>>>>>> upstream/master
