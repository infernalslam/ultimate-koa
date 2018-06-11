# Ultimate Koajs backend set up project
### set up
- [x] set koa running for nodejs (node version fix: LTS)
- [x] set koa-body like body-parser
- [x] set standard code ( use standard style )
- [x] set middleware
- [ ] set sequelize init migration base (optional)
- [x] set docker
- [x] set cors origin
- [x] set husky ( prevent push production )
- [x] set unit test by ( jest )

### How to run Docker!
you need to know about DockerFile is customize
```
$ docker build -t <name-container> .
$ docker run -p <map-port>:<map-port-server-in-container> <name-container>
```

### How to set Husky
you can change husky step test in deploy code to github/bitbucket:
package.json

```
{
  ......,
  "scripts": {
    "precommit": "npm test",
    "prepush": "npm test"
  }
}
```

### How to set Cors origin

you can change CORS in file `server.js`
```js
  app.use(cors()) // change code for define CORS APIs
  // exmaple
  app.use(cors({
    origin: 'domain access'
  }))
```

### How to config koa-body
you can change CORS in file `server.js`
```js
  app.use(koaBody({
    formLimit: '5mb',
    multipart: true
  }))
```

