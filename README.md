# Jinyus.go
Jiny and Us to go to make a better world - Forum

## Dev Environment

### GasbyJS
```
$ npm i --g gatsby-cli
$ gatsby --help
```

#### Install and run the empty template for the site
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

#### grahql
GraphiQL is an in-browser tool for writing, validating, and testing GraphQL queries.
Type queries into this side of the screen, and you will see intelligent
typeaheads aware of the current GraphQL type schema and live syntax and
validation errors highlighted within the text.

GraphQL queries typically start with a "{" character. Lines that starts
with a # are ignored.

An example GraphQL query might look like:
{
  field(arg: "value") {
    subField
  }
}

Run the graphql in the browser with the build url : http://localhost:8000/___graphql


### Install Gatsby Plugins

1) SASS package installation
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

2) Source Filesystem
A Gatsby source plugin for sourcing data into your Gatsby application from your local filesystem.

The plugin creates File nodes from files. The various “transformer” plugins can transform File nodes into various other types of data e.g. gatsby-transformer-json transforms JSON files into JSON data nodes and gatsby-transformer-remark transforms markdown files into MarkdownRemark nodes from which you can query an HTML representation of the markdown.

```
$ npm i --save gatsby-source-filesystem
```

```
plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'files',
        path: `${__dirname}/src/pages`,
      }
    }
  ],
```

3) Transformer Remark
Parses Markdown files using Remark.

```
$ npm i --save gatsby-source-filesystem
```

```
plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'files',
        path: `${__dirname}/src/markdown`,
      }
    },
    'gatsby-transformer-remark'
  ],
```

the combination of the two plugins: 'source-filesystem' and 'transformer-remark', can access markdwon file information

### Deploy Gatsby

Build production site
```
$ gatsby build
```
 * build package path : [project folder]/public

Optimisation
```
$ gatsby serve
```

### Deploy Gatsby in AWS
AWS Amplify console -> Deploy ->

### Setup API of AWS with Gatsby

$ npm install -g @aws-amplify/cli
$ amplify configure
