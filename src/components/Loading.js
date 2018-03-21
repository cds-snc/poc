import React from 'react'
import { css } from 'react-emotion'
import { Header1, ContainerLoading } from './styles'

const loading = css`
  .loader,
  .loader:before,
  .loader:after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: load7 1.8s infinite ease-in-out;
    animation: load7 1.8s infinite ease-in-out;
  }

  .loader {
    color: #d2d2d2;
    font-size: 10px;
    margin: 80px auto;
    position: relative;
    text-indent: -9999em;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  .loader:before,
  .loader:after {
    content: '';
    position: absolute;
    top: 0;
  }
  .loader:before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .loader:after {
    left: 3.5em;
  }
  @-webkit-keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
  @keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
`

const loadingBar = css`
  width: 300px;
  margin-bottom: 50px;
`

export const Loading = () => (
  <div className={loading}>
    <ContainerLoading>
      <img
        className={loadingBar}
        src="https://cdn.rawgit.com/nmakuch/6234e8d9da6620bf96dde84f29aecb74/raw/feb89aad1d75fc73d27a881cbf4bb4000187126c/loadingBar.svg"
      />

      <Header1>The page is loading...</Header1>
    </ContainerLoading>
  </div>
)
