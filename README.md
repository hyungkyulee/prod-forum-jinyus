# Jinyus.go
Jiny and Us to go to make a better world - Forum

## Dev Environment

### Gasby Init
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


### Gatsby Plugins

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
(souce : https://aws.amazon.com/blogs/startups/building-your-app-from-idea-to-mvp-part-2/)

```
$ npm install -g @aws-amplify/cli
```

Create a new IAM user and set the new credential
(* if you're going to use the existing credential, you don't need to do this step.)
```
$ amplify configure
Follow these steps to set up access to your AWS account:

Sign in to your AWS administrator account:
https://console.aws.amazon.com/
Press Enter to continue

Specify the AWS Region
? region:  eu-west-1
Specify the username of the new IAM user:
? user name:  jinyus
Complete the user creation using the AWS console
https://console.aws.amazon.com/iam/home?region=undefined#/users$new?step=final&accessKey&userNames=jinyus&permissionType=policies&policies=arn:aws:iam::aws:policy%2FAdministratorAccess
Press Enter to continue

Enter the access key of the newly created user:
? accessKeyId:  ********************
? secretAccessKey:  ****************************************
This would update/create the AWS Profile in your local machine
? Profile Name:  dintentdev
```

Create a new amplify project
(* When you run this command line, you have to login the same user as the credential of aws configure file)
```
$ amplify init
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project jinyus
? Enter a name for the environment prod
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: public
? Build Command:  gatsby build
? Start Command: npm run start
Using default provider  awscloudformation

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html

? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use dintentdev
Adding backend environment prod to AWS Amplify Console app: d4pkwulpm4bce
⠧ Initializing project in the cloud...

:

$ amplify env list

| Environments |
| ------------ |
| *prod        |

```
When prompted for an AWS profile, choose the profile you created in the configuration step.

Now that we have the base project set up, let’s also go ahead and install the AWS Amplify client library:
```
$ npm i aws-amplify
```

#### Authentication
complete the authentication setup for this app will need to accomplish the following things:
Enable users to sign up and sign in
```
$ amplify add auth
Using service: Cognito, provided by: awscloudformation
 
 The current configured provider is Amazon Cognito. 
 
 Do you want to use the default authentication and security configuration? Defau
lt configuration
 Warning: you will not be able to edit these selections. 
 How do you want users to be able to sign in? Username
 Do you want to configure advanced settings? Yes, I want to make some additional
 changes.
 Warning: you will not be able to edit these selections. 
 What attributes are required for signing up? Email
 Do you want to enable any of the following capabilities? 
Successfully added resource jinyus3a9d20ff locally

$ amplify update auth
Please note that certain attributes may not be overwritten if you choose to use defaults settings.

You have configured resources that might depend on this Cognito resource.  Updating this Cognito resource could have unintended side effects.

Using service: Cognito, provided by: awscloudformation
 What do you want to do? Create or update Cognito user pool groups
? Provide a name for your user pool group: Admin
? Do you want to add another User Pool Group No
✔ Sort the user pool groups in order of preference · Admin
Successfully updated resource jinyus3a9d20ff locally
```

#### Storage
create the image storage service using Amazon S3:
```
$ amplify add storage
? Please select from one of the below mentioned services: Content (Images, audio
, video, etc.)
? Please provide a friendly name for your resource that will be used to label th
is category in the project: jinyus
? Please provide bucket name: s3jinyus
? Who should have access: Auth and guest users
? What kind of access do you want for Authenticated users? create/update, read, 
delete
? What kind of access do you want for Guest users? read
? Do you want to add a Lambda Trigger for your S3 Bucket? No
```

#### API/Database
we need to create is an API and a database to store our data. This API needs to allow both authenticated and unauthenticated access.
Authenticated Admin users should be able to create and update items in the database while unauthenticated access will allow us to query the API at build time to fetch the data needed for the application.
To allow this, we’ll create an AWS AppSync GraphQL API & Amazon DynamoDB NoSQL database using the CLI:
```
$ amplify add api
? Please select from one of the below mentioned services: GraphQL
? Provide API name: jinyusapi
? Choose the default authorization type for the API Amazon Cognito User Pool
Use a Cognito user pool configured as a part of this project.
? Do you want to configure advanced settings for the GraphQL API Yes, I want to 
make some additional changes.
? Configure additional auth types? Yes
? Choose the additional authorization types you want to configure for the API AP
I key
API key configuration
? Enter a description for the API key: gatsby
? After how many days from now the API key should expire (1-365): 100
? Configure conflict detection? No
? Do you have an annotated GraphQL schema? No
? Do you want a guided schema creation? Yes
? What best describes your project: One-to-many relationship (e.g., “Blogs” with
 “Posts” and “Comments”)
? Do you want to edit the schema now? Yes
Please edit the file in your editor: /Users/albert/_proj/jinyus/prod-forum-jinyus/amplify/backend/api/jinyusapi/schema.graphql
? Press enter to continue 

The following types do not have '@auth' enabled. Consider using @auth with @model
	 - Blog
	 - Post
	 - Comment
Learn more about @auth here: https://docs.amplify.aws/cli/graphql-transformer/directives#auth
GraphQL schema compiled successfully.
```

#### Deploy to AWS
```
$ amplify push --y
✔ Successfully pulled backend environment prod from the cloud.

Current Environment: prod

| Category | Resource name                     | Operation | Provider plugin   |
| -------- | --------------------------------- | --------- | ----------------- |
| Function | jinyus4f3f9efcDefineAuthChallenge | Create    | awscloudformation |
| Auth     | jinyus3a9d20ff                    | Create    | awscloudformation |
| Auth     | userPoolGroups                    | Create    | awscloudformation |
| Storage  | jinyus                            | Create    | awscloudformation |
| Api      | jinyusapi                         | Create    | awscloudformation |

The following types do not have '@auth' enabled. Consider using @auth with @model
	 - Blog
	 - Post
	 - Comment
Learn more about @auth here: https://docs.amplify.aws/cli/graphql-transformer/directives#auth
GraphQL schema compiled successfully.

Edit your schema at /Users/albert/_proj/jinyus/prod-forum-jinyus/amplify/backend/api/jinyusapi/schema.graphql or place .graphql files in a directory at /Users/albert/_proj/jinyus/prod-forum-jinyus/amplify/backend/api/jinyusapi/schema
⠴ Updating resources in the cloud. This may take a few minutes...
:
:
:
✔ Generated GraphQL operations successfully and saved at src/graphql
✔ All resources are updated in the cloud

GraphQL endpoint: https://jt5yic4tgbbode5z7bd3i274jm.appsync-api.eu-west-1.amazonaws.com/graphql
GraphQL API KEY: da2-k7puqsa6nvfhrguabo25oedx7e
```

### Bootstrap4 and React-bootstrap in Gatsby
source : https://react-bootstrap.github.io/components

Install the packages
```
npm i react-bootstrap bootstrap --save
```

at gatsby-browser.js
```
import "./node_modules/bootstrap/dist/css/bootstrap.css'
```

Example of Header.js with 'Navbar' of 'react-bootstrap'
```
import React from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

export default () => (

  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Jinyus</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <NavDropdown title="Articles" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action with doers</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Story Together</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">News around us</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">What about you</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/admin">Signin</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>

)
```


### AWS Appsync

Services -> AWS AppSync -> Queries -> login with :
Amazon Cognito User Pool : eu-west-1_SKV***44G
Client Id : 5qmokbh**********7po97dcljd 
( * client id can be refered at aws-exports.js)

Creat 1 Blog, 1 Post, 1 Comments

```
mutation CreateBlog {
  createBlog(input:
  {
    id: "3b51348c-9e21-42ad-b186-6cd157c4b3d1",
    name: "action with doers"
  })
  {
    id
    name
  }
}
```

```
mutation CreatePost {
  createBlog(input:
  {
    id: "00000000-9e21-42ad-b186-6cd157c4b3d1",
    title: "action with doers",
    blogID: "3b51348c-9e21-42ad-b186-6cd157c4b3d1"
  })
  {
    id
    title
    blogID
  }
}
```

```
mutation createComment {
  createComment(input:
  {
    id: "cc000000-9e21-42ad-b186-6cd157c4b3d1"
    postID: "00000000-9e21-42ad-b186-6cd157c4b3d1"
    content: "jsdklfsajfsdjf sdflsdjfjdsjlfjkljdlsjldkfjsdlkfjlj Our first post!"
  }) {
    id
    postID
    content
  }
}
```
