# Gym Manager - Lucas Armanelli
#### _Rocketseat project_
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
https://gymmanagerapp.herokuapp.com/

![Cover](https://i.imgur.com/F2dSvtm.png)
![Cover2](https://i.imgur.com/sWy9vJJ.png)

Gym management web application, responsible for controlling instructors and members.

## Features
- Create, view, edit and delete instructors and members.
- Filter instructors and members.
- Pagination.
- Dynamic pages with Nunjucks.
- PostgreSQL database.

## Technologies
- [HTML](https://devdocs.io/html/)
- [CSS](https://devdocs.io/css/)
- [Javascript](https://devdocs.io/javascript/)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [PostgreSQL](https://www.postgresql.org/)


##### How to use:
Requires: [Node](https://nodejs.org/en/) and [Postgres](https://www.postgresql.org/)
```sh
git clone
npm install
psql -U postgres -c "CREATE DATABASE gymmanager"
psql -U postgres -d gymmanager <gymmanager.sql
npm start
```

## License

MIT
