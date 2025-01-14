/* eslint-disable import/prefer-default-export */
import { graphql, useStaticQuery } from 'gatsby';
import { useState, useLayoutEffect } from 'react';

/**
 * custom hoook to detect the window size of a broswer
 * @return {Array} [height, width ].
 */
export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          pathPrefix
          siteUrl
          title
          description
          author
          authorAlternative
          introduction
          avatar
          tocMaxDepth
          excerptMaxLength
          birthday
          location
          email
          language
          postsForArchivePage
          social {
            url
            icon
          }
          disqusScript
          contactFormUrl
          pages {
            home
            tags
            project
          }
          interests {
            icon
            title
          }
          education {
            date
            icon
            title
            location
          }
          awards {
            date
            title
          }
          tags {
            id
            name
            description
            color
          }
        }
      }
    }
  `);
  return data.site.siteMetadata;
};
