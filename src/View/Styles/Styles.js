/** @jsx jsx */
import React from 'react';
import { jsx, css, Global } from '@emotion/core';
import useColor from 'hooks/useColor';
import emotionNormalize from 'emotion-normalize';

const Styles = React.memo(() => {
  const getColor = useColor();

  return (
    <Global
      styles={css`
        ${emotionNormalize}
        table {
          border-collapse: collapse;
          border-spacing: 0;
          width: 100%;
        }

        html {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          height: 100%;
          font-family: sans-serif;
        }

        html {
          font-size: 100%;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
          font-family: inherit;
        }

        * {
          margin: 0;
          padding: 0;
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
          margin: 0;
        }

        a,
        button {
          cursor: pointer;
          color: inherit;
        }
        *::-webkit-scrollbar{
            appearance: none;
            width: 6px;
            height: 8px;
        }

        *::-webkit-scrollbar-track{
            background: rgba(0, 0, 0, 0.1);
            border-radius: 0;
        }

        *::-webkit-scrollbar-thumb{
            cursor: pointer;
            border-radius: 5px;
            background: rgba(0, 0, 0, 0.25);
            transition: color 0.2s ease;
        }

        *:hover::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 0.25);
        }
        // ${require('highlight.js/styles/github.css')}
        // ${require('github-markdown-css/github-markdown.css')}
        // ${require('prismjs/themes/prism.css')}
        body {
          color: ${getColor('a02')};
          background: ${getColor('a05')};
          textarea::placeholder,
          input::placeholder {
            color: ${getColor('a07')};
          }
        }
      `}
    />
  );
});

export default Styles;
