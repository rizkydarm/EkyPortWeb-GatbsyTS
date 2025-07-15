import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Rizky Portfolio`,
    siteUrl: `https://rizky-port.web.app`,
    description: 'A portfolio website built with Gatsby, React, TypeScript, and Material-UI.',
    author: `Rizky Darmawan`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rizky Portfolio`,
        short_name: `RizkyPort`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#19D9B6`,
        icon: `static/favicon.png`,
      },
    },
  ],
}

export default config
