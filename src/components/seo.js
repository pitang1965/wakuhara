/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function Seo({ author, description, image, lang, meta, title, url }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
            image
            title
            url
          }
        }
      }
    `
  );

  const defaultTitle = site.siteMetadata?.title;
  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          name: `og:image`,
          content: image,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `og:url`,
          content: url,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:site`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
      ].concat(meta)}
    />
  );
}

Seo.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
};

Seo.defaultProps = {
  author: '',
  description: ``,
  lang: `ja`,
  meta: [],
};

export default Seo;
