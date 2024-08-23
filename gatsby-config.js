module.exports = {
  siteMetadata: {
    siteTitle: 'Malithi Alahapperuma',
    siteDescription: 'Writing portfolio of Malithi Alahapperuma',
    siteImage: '/malithi-banner.png', // main image of the site for metadata
    siteUrl: 'https://malithia.com/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Malithi Alahapperuma', // for example - 'Ivan Ganev'
    authorDescription: 'documentation | proposal writing | content writing', // short text about the author
    avatar: '/snoopy.jpg',
    twitterSite: '', // website account on twitter
     // creator account on twitter
      social: [
        {
        icon: `envelope`,
        url: `mailto:malithialahapperuma@outlook.com`,
        },
        {
        icon: `linkedin`, // change the icon to "linkedin"
        url: `https://www.linkedin.com/in/malithia/`,
        },
        {
          icon: `twitter`, // change the icon to "Twitter"
          url: `https://x.com/ma9lithi`,
          },
      ],
      // {
      //   icon: `github`,
      //   url: `https://github.com/Chronoblog/gatsby-theme-chronoblog`,
      // },
      // {
      //   icon: `node-js`,
      //   url: `https://www.npmjs.com/package/gatsby-theme-chronoblog`,
      // },
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags',
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: false,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 ',
            },
          },
        },
        feedSearch: {
          symbol: '🔍',
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/snoopy.jpg`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X',
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        // replace "chronoblog-profile" with your own disqus shortname
        shortname: `chronoblog-profile`,
      },
    },
  ],
};
