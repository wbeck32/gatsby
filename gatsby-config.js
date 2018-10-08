module.exports = {
  siteMetadata: {
    title: 'Fuck you you fucking fuck.',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-helmet',
      options: {

      }
    },
    {
      resolve: 'gatsby-transformer-json',
      options: {

      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: './src/data/',
      },
    },

    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfgModule: 'src/utils/typography.js'
      }
    },
    'gatsby-transformer-remark',
    // {
    //   resolve : 'gatsby-plugin-manifest',
    //   options : {
    //     name : 'gatsby-starter-default',
    //     short_name : 'starter',
    //     start_url : '/',
    //     background_color : '#663399',
    //     theme_color : '#663399',
    //     display : 'minimal-ui',
    //     icon : 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
    //   },
    // },
    {
      resolve: 'gatsby-plugin-offline'
    }
  ],
};
