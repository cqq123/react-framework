/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { Route, Switch } from 'react-router-dom';
import Navs from './Navs';
import Pages from './PageContent';

const Container = React.memo(() => {
  console.log('xixi');
  return (
    <div
      css={css`
        height: 100%;
        display: flex;
      `}
    >
      <div
        css={css`
          flex-grow: 1;
          background: rgb(48, 65, 86);
        `}
      >
        <Navs />
      </div>
      <div
        css={css`
          width: calc(100% - 12rem);
          padding: 1rem;
          > div {
            height: 100%;
          }
        `}
      >
        <Pages />
      </div>
    </div>
  );
});

export default Container;
