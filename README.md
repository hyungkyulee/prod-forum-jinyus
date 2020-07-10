# Jinyus.go
Jiny and Us to go to make a better world - Forum

## Dev Environment

### GasbyJS
```
$ npm i --g gatsby-cli
$ gatsby --help
```

Install and run the empty template for the site
```
$ gatsby new [my folder] https://github.com/gatsbyjs/gatsby-starter-hello-world.git
OR [copy the source to the destination folder]

$ npm i
$ gatsby develop
```
(* $npm start will not work in the gatsby project)

run the service on the browser guided by gatsby localhost
```
 DONE  Compiled successfully in 5511ms                                                                                   13:26:35
⠀
 I  Netlify CMS is running at http://localhost:55711/admin/
⠀
You can now view gatsby-starter-blog-and-cv in the browser.
⠀
  http://localhost:8000/
⠀
View GraphiQL, an in-browser IDE, to explore your site's data and schema
⠀
  http://localhost:8000/___graphql
⠀
Note that the development build is not optimized.
To create a production build, use gatsby build
⠀
success Building development bundle - 18.319s
```

Install Gatsby Plugins

SASS package installation
```
$ npm i --save node-sass gatsby-plugin-sass
```

configuration of SASS plugin at gatsby-config.js
```
module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-sass'
  ],
}
```
