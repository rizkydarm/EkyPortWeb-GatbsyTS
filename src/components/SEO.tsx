import React from "react";
import { useStaticQuery, graphql } from "gatsby";

interface SEOProps {
  title?: string;
  description?: string;
  author?: string;
}

const SEO = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  const metaTitle = site.siteMetadata.title;
  const metaDescription = site.siteMetadata.description;
  const metaAuthor = site.siteMetadata.author;

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="author" content={metaAuthor} />
    </>
  );
};

export default SEO;
