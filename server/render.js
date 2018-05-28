import React from 'react'
import ReactDOM from 'react-dom/server'
import { Provider } from 'react-redux'
import { flushChunkNames } from 'react-universal-component/server'
import flushChunks from 'webpack-flush-chunks'
import { extractCritical } from 'emotion-server'
import configureStore from './configureStore'
import { ApolloProvider } from 'react-apollo'
import App from '../src/components/App'
import { client } from '../src/ApolloClient'

export default ({ clientStats }) => async (req, res, next) => {
  const store = await configureStore(req, res)
  if (!store) return // no store means redirect was already served

  const app = createApp(App, store)
  const { html, ids, css } = extractCritical(ReactDOM.renderToString(app))
  const state = store.getState()
  const stateJson = JSON.stringify(state)
  const chunkNames = flushChunkNames()
  const { js, styles, cssHash } = flushChunks(clientStats, { chunkNames })

  return res.send(
    `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>${state.title}</title>
          ${styles}
          <style type="text/css">
           ${css}
          </style>
        </head>
        <body>
          <script>
            window.REDUX_STATE = ${stateJson}
            window.EMOTION_HYDRATION_IDS = ${JSON.stringify(ids)}
          </script>
          <div id="root">${html}</div>
          ${cssHash}
          <script type='text/javascript' src='/static/vendor.js'></script>
          ${js}
        </body>
      </html>`,
  )
}

const createApp = (App, store) => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>
)
