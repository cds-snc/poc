import React from 'react'
import { NavLink } from 'redux-first-router-link'
import { connect } from 'react-redux'
import { withApollo } from 'react-apollo'
import { Trans } from 'lingui-react'
import { css } from 'react-emotion'
import { spacing } from './styles'

const main = css`
  section {
    margin-bottom: ${spacing.xxl}px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`

const Home = () => (
  <main role="main" className={main}>
    <header id="index-page">
      <div id="page-header">
        <h2>
          <Trans>Natural Resources Canada</Trans>
        </h2>
        <h1>
          <Trans>EnerGuide Website</Trans>
        </h1>
      </div>

      <p>
        <Trans>
          The EnerGuide API allows you to access the housing data provided by
          Natural Resources Canada. You will have open access the data, and will
          be able to query to an individual dwelling.
        </Trans>
      </p>
      <NavLink to="/search">
        <Trans>Test the API</Trans>
      </NavLink>
      <a href="https://github.com/cds-snc/nrcan_api">
        <Trans>Access the API</Trans>
      </a>
    </header>

    <div id="page-body">
      <section>
        <h2>
          <Trans>What is an API?</Trans>
        </h2>
        <p>
          <Trans>
            An <abbr title="Application Programming Interface">API</abbr>, or{' '}
            <strong>Application Programming Interface</strong>, is a set of
            routines, protocols and tools for building software. Many
            applications can talk to each other and deliver a response.
          </Trans>
        </p>
      </section>
      <section>
        <h2>
          <Trans>What are the benefits of the EnerGuide API?</Trans>
        </h2>
        <h3>
          <Trans>View open data</Trans>
        </h3>
        <p>
          <Trans>
            The EnerGuide API will help make energy consumption data accessible
            for everyone.
          </Trans>
        </p>
        <h3>
          <Trans>Query specific data</Trans>
        </h3>
        <p>
          <Trans>
            You can choose to access the granular data that you need. You will
            benefit from the ability to extract data data that is specific to
            your needs.
          </Trans>
        </p>
        <h3>
          <Trans>Access current data</Trans>
        </h3>
        <p>
          <Trans>
            The EnerGuide API will help make energy consumption data accessible
            for everyone.
          </Trans>
        </p>
      </section>
      <section>
        <h2>
          <Trans>How can I use the EnerGuide API?</Trans>
        </h2>
        <p>
          <Trans>
            Developers and data analysts can allow users to query specific
            information from large data sets. They set the rules that will guide
            the user to what they need.{' '}
          </Trans>
        </p>
        <h3>
          <Trans>To see how it can be used,&nbsp;</Trans>
          <NavLink to="/search">
            <Trans>test the API</Trans>
          </NavLink>
        </h3>
        <h3>
          <Trans>Ready to use the Energuide API?&nbsp;</Trans>
          <NavLink to="https://github.com/cds-snc/nrcan_api">
            <Trans>Read the documentation</Trans>
          </NavLink>
        </h3>
      </section>
    </div>
  </main>
)

const mapStateToProps = state => ({
  path: state.location.pathname,
})

export default withApollo(connect(mapStateToProps)(Home))
