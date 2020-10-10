require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `Górka - usługi wysokościowe`,
    description: `Usługi wysokościowe na najwyższym poziomie. Oferuję szeroką gamę usług wysokościowych i alpinistycznych. Mycie, czyszczenie, malowanie, odnawianie, montaż... `,
    author: `@patrykgorka`,
    siteUrl: "https://firmagorka.pl",
    keywords: [
      "firmagorka",
      "Michał Górka",
      "Górka",
      "gorka",
      "Górka - usługi wysokościowe",
      "usługi wysokościowe",
      "Mycie szyb",
      "Czyszczenie dachów",
      "Odkurzanie miejsc trudno dostępnych",
      "Mycie kominów",
      "Czyszczenie kostki brukowej",
    ],
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
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: `firmagorka/`,
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `video`,
        prefix: `firmagorka/`,
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "CloudinaryMedia",
        imagePath: "url",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
