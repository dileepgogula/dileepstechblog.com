const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'DileepsTechBlog',
    author: 'Dileep Gogula',
    description: 'Tech Blog for bigdata developers',
    siteUrl: 'https://dileepgogula.github.io/dileepstechblog.com',
    social: {
      twitter: 'dileepgogula',
      facebook: 'dileepkumargogula',
      instagram: 'dileepgogula',
      github: 'dileepgogula',
    },
    config: {
      postsPerPage: 10,
      disqus: 'dileepsblog',
    },
  },

  plugins: [
    {
      resolve: 'gatsby-theme-ghost-casper',
      options: {
        title: 'GeeksCreed',
        pathPrefix: '/dileepstechblog.com'
      },
    },
    ...(process.env.NODE_ENV === 'production'
      ? [
          // {
          //   resolve: 'gatsby-plugin-guess-js',
          //   options: {
          //     // Find the view id in the GA admin in a section labeled "views"
          //     GAViewID: `184855678`,
          //     minimumThreshold: 0.03,
          //     // The "period" for fetching analytic data.
          //     period: {
          //       startDate: new Date('2018-12-1'),
          //       endDate: new Date(),
          //     },
          //   },
          // },
          {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              trackingId: `UA-129019237-1`,
            },
          },
        ]
      : []),
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dileeps  Blog`,
        short_name: `DileepsBlog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: path.resolve(`src/assets/icon.png`),
      },
    },
    `gatsby-plugin-offline`,
  ],
};
