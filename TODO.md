# Todo

## Features

### Github

- [X] Github Authentication via Passport
- [ ] Realtime Feed (commits, pull requests, merges, new repos)
  - [X] Connect with Github API
  - [ ] Style (color-coded by activity - commits, vs pull requests vs merges)
  - [ ] Remove ReactJS Components
  - [X] Socket.IO
  - [X] Throttling - to only show 100 activies
  - [ ] Sound Effects/Flash Messages on new activity
  - [ ] Handling REST architecture with Github / rate limiting / cacheing

What should be in the feed?

- Commits: who, message, repo
- New repo creation
- When a user joins
- Pull Requests
- Group Repo Activity

### Twitter
- [X] Realtime Feed
  - [X] Connect with Twitter API
  - [ ] Remove ReactJS Components
  - [X] Socket.IO
  - [X] Infinite Scroll
  - [ ] Throttling - to only show 100 activies
  - [ ] Sound Effects/Flash Messages on new activity

### Admin Portal (WIP)
- [ ] Update Title and Logo (and other data/metadata - dates, location, etc.) for organizing hackathon
- [ ] Open and close Realtime feeds - e.g., twitter and github
- [ ] Update/add repos to watch for
- [ ] Update/add users to watch for
- [ ] Update/add Twitter accounts to watch for

### Data Visualization (via [NVD3](http://nvd3.org/) or [Angular NVD3](https://github.com/Rossem/RedditStorage))
- [ ] Number of activies per repo
- [ ] Number of Tweets
- [ ] Sumarize hackathon
- [ ] Etc.

### Splash Page (for every user)
- [ ] Combine Twitter and Github feeds into one - and let users toggle on/off
- [ ] Show hackathon details
- [X] User login
- [ ] Countdown to hackthon
- [ ] Show connected users/accounts (from Github and Twitter)
- [ ] Contact Admin form
- [ ] Email Invite
- [ ] Social icons to promote Hackathon
- [ ] Add data viz

### Ops

- [X] Add build systems
- [X] Add bower
- [X] Add unit and integration tests
- [ ] Add code coverage/coveralls - broken as of 06/06/2015
- [X] Add Mongo/Mongoose (or [Monk](https://github.com/Automattic/monk))
- [X] Finalize CI/CD workflow

### Design

- [ ] Makeover - UI/UX