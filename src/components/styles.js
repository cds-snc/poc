import { css } from 'react-emotion'
import styled from 'react-emotion'

const borderRadius = 2
export const roundedEdges = css`
  -webkit-border-radius: ${borderRadius}px;
  -moz-border-radius: ${borderRadius}px;
  border-radius: ${borderRadius}px;
`

/*
 * Hide only visually, but have it
 * available for screenreaders
 */
export const visuallyhidden = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

export const breakpoints = {
  xs: 481,
  small: 576,
  ms: 600,
  medium: 764,
  large: 992,
  xLarge: 1500,
  xxl: 3000,
}

export const theme = {
  colour: {
    yellow: '#FDD262',
    yellowLight: '#E5BF73',
    yellowDark: '#E7AE27',
    blue: '#1177DD',
    blueDark: '#073767',
    blueAlpha: '#4A90E2',
    red: '#A5071B',
    grey: '#4A4A4A',
    gray: '#4A4A4A',
    greyLight: '#DBDBDB',
    grayLight: '#DBDBDB',
    white: '#FFFFFF',
    black: '#000000',
    focus: '#ffbf47',
    visited: '#551a8b',
  },
  weight: {
    l: 'lighter, sans serif',
    li: 'lighter, italic, sans serif',
    m: 'sans serif',
    mi: 'sans serif',
    r: 'sans serif',
    s: 'sans serif',
    b: 'bold, sans serif',
    bi: 'bold, italic, sans serif',
  },
  font: {
    xs: '12px',
    sm: '16px',
    base: '20px',
    md: '20px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  spacing: {
    md: 16,
    sm: 16 / 2,
    xs: 16 / 3,
    xxs: 16 / 6,
    lg: parseInt(16 * 1.35),
    xl: 16 * 2,
    xxl: 16 * 3,
    xxxl: 16 * 5,
  },
}

export const mediaQuery = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    let prefix = typeof breakpoints[label] === 'string' ? '' : 'max-width:'
    let suffix = typeof breakpoints[label] === 'string' ? '' : 'px'
    accumulator[label] = cls =>
      css`
        @media screen and (${prefix + breakpoints[label] + suffix}) {
          ${cls};
        }
      `
    return accumulator
  },
  {},
)

export const para = css`
  ${mediaQuery.small(css`
    font-size: ${theme.font.sm};
  `)};
`

export const headerLink = css`
  padding-right: ${theme.spacing.md}px;
  font-family: ${theme.weight.b}, Arial, sans serif;

  ${mediaQuery.small(css`
    font-size: ${theme.font.sm};

    &:first-of-type {
      margin-bottom: ${theme.spacing.md}px;
    }
  `)};

  ${mediaQuery.xs(css`
    display: block;
  `)};

  & > a {
    color: ${theme.colour.blue};

    &:focus {
      outline-color: ${theme.colour.visited};
    }
  }
`

export const Header1 = styled.h1`
  color: ${theme.colour.black};
  font-family: ${theme.weight.b}, Arial, sans-serif;
  font-size: ${theme.font.xxl};
  margin-bottom: ${theme.spacing.lg}px;

  ${mediaQuery.small(css`
    font-size: ${theme.font.xl};
  `)};
`

export const Header2 = styled.h2`
  color: ${theme.colour.black};
  font-family: ${theme.weight.b}, Arial, sans-serif;
  font-size: ${theme.font.lg};
  margin-bottom: ${theme.spacing.md}px;

  ${mediaQuery.small(css`
    font-size: ${theme.font.md};
  `)};
`

export const Header3 = styled.h3`
  color: ${theme.colour.black};
  font-family: ${theme.weight.b}, Arial, sans-serif;
  font-size: ${theme.font.md};
  margin-bottom: 0px;
  line-height: 1.4;

  ${mediaQuery.small(css`
    font-size: ${theme.font.sm};
  `)};
`

export const IndexHeader = styled.header`
  background-color: ${props => props.theme.colour.yellow};
  padding: ${theme.spacing.xxxl}px ${theme.spacing.xxxl}px;
  height: 21em;

  ${mediaQuery.medium(css`
    padding-top: ${theme.spacing.xxl}px;
    padding-bottom: ${theme.spacing.xxl}px;
    height: initial;
  `)};

  ${mediaQuery.small(css`
    padding-top: ${theme.spacing.xl}px;
    padding-bottom: ${theme.spacing.xl}px;
    padding-left: ${theme.spacing.lg}px;
    padding-right: ${theme.spacing.xl}px;
  `)};
`

export const HeaderContainer = styled.div`
  width: 45%;
  position: absolute;
  z-index: 1;
  margin-left: 0px;

  ${mediaQuery.medium(css`
    position: static;
    width: 100%;
  `)};

  ${mediaQuery.small(css`
    width: 100%;
  `)};

  h2 {
    margin-bottom: 0;
  }
`

export const Section = styled.section`
  margin-bottom: ${theme.spacing.xxl}px;
  padding-left: ${theme.spacing.xxxl}px;
  width: 60%;
  &:first-of-type {
    margin-top: ${theme.spacing.xl}px;
  }

  ${mediaQuery.medium(css`
    width: 90%;
  `)};

  ${mediaQuery.small(css`
    width: 100%;
    margin-bottom: ${theme.spacing.xl}px;
    padding-right: ${theme.spacing.xl}px;
    padding-left: ${theme.spacing.lg}px;
  `)};
`
export const PageBody = styled.div`
  margin: 0px;
  padding: 0px;
  padding-right: 0;
  width: 100%;
`

export const UseTheGuide = styled.div`
  padding-top: ${theme.spacing.md}px;
  background-color: #f8f8f8;

  ${mediaQuery.small(css`
    padding-top: ${theme.spacing.xs}px;

    section {
      margin-bottom: ${theme.spacing.lg}px;
    }
  `)};
`

export const SearchContainer = styled.div`
  width: 75%;

  ${mediaQuery.xxl(css`
    padding-left: ${theme.spacing.xxxl}px;
    padding-top: ${theme.spacing.xxl}px;
  `)};

  ${mediaQuery.xLarge(css`
    padding-bottom: 4em;
  `)};

  ${mediaQuery.small(css`
    width: 100%;
    padding-top: ${theme.spacing.xl}px;
    padding-right: ${theme.spacing.xl}px;
    padding-left: ${theme.spacing.lg}px;
    padding-bottom: ${theme.spacing.xl}px;

    header + p {
      margin-bottom: ${theme.spacing.md}px;
    }
  `)};
`

export const LocationContainer = styled.div`
  width: 75%;
  padding-left: ${theme.spacing.xxxl}px;
  padding-top: ${theme.spacing.xxl}px;

  ${mediaQuery.small(css`
    width: 100%;
    padding-top: ${theme.spacing.xl}px;
    padding-right: ${theme.spacing.xl}px;
    padding-left: ${theme.spacing.lg}px;
    padding-bottom: ${theme.spacing.xl}px;
  `)};
`

export const ContainerFourOh = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
