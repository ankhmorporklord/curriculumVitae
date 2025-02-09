require("dotenv").config();

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  jsxRuntime: "automatic",
  siteMetadata: {
    description: `Portfolio of Michael Whittet, a Front End Developer based just outside of London in Essex`,
    siteUrl: `https://www.michaelwhittet.co.uk`,
    title: `Michael Whittet`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Marmelad",
              fontDisplay: "optional",
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        background_color: `#000000`,
        description: `Portfolio of Michael Whittet, a Front End Developer based just outside of London in Essex`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icons: [
          {
            src: "src/images/icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "src/images/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "src/images/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "src/images/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "src/images/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "src/images/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "src/images/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "src/images/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        name: `Michael Whittet's Portfolio`,
        short_name: `MW's Portfolio`,
        start_url: `/`,
        theme_color: `#000000`,
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: "gatsby-plugin-svgr-loader",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.michaelwhittet.co.uk/",
        policy: [{ userAgent: "*", allow: "/", disallow: "/static" }],
        sitemap: "https://www.michaelwhittet.co.uk/sitemap.xml",
      },
    },
    `gatsby-plugin-offline`,
  ],
};
