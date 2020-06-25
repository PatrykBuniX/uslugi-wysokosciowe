require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `Górka - usługi wysokościowe`,
    description: `Usługi wysokościowe na najwyższym poziomie. Oferuję szeroką gamę usług wysokościowych i alpinistycznych. Mycie, czyszczenie, malowanie, odnawianie, montaż... `,
    author: `@patrykgorka`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Górka - usługi wysokościowe`,
        short_name: `firmagorka`,
        start_url: `/`,
        background_color: `#8DC1DF`,
        theme_color: `#8DC1DF`,
        display: `minimal-ui`,
        icon: `src/icons/icon.svg`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto\:400,700`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // The top level query type, can be anything you want!
        typeName: "gallery",
        // The field you'll query against, can also be anything you want.
        fieldName: "gallery",
        // Your API endpoint, available from the dashboard and settings window.
        // You can use this endpoint that features US mountains for now.
        url:
          "https://api-eu-central-1.graphcms.com/v2/ck98e0tcv0zx901xxdhcuc42v/master",
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: `firmagorka/`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
