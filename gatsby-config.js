/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Home'
  },
  
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'files',
        path: `${__dirname}/src/markdown`,
      }
    },
    'gatsby-transformer-remark',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-graphql`,
      options: { 
            typeName: `gatsbyappsync`,
            fieldName: `gatsbyappsync`,
            url: `https://jt5yic4tgbbode5z7bd3i274jm.appsync-api.eu-west-1.amazonaws.com/graphql`,
            headers: {
                'x-api-key': 'randomkey'
            }
      },
    },
  ],
}
