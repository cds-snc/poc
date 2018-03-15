import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'
import { colours, fontSizes, spacing } from '../styles'

const govuk_multiple_choice = css`
  display: block;
  float: none;
  clear: left;
  position: relative;
  padding: 0 0 0 38px;
  margin-bottom: 10px;

  input {
    position: absolute;
    cursor: pointer;
    left: 0;
    top: 0;
    width: 38px;
    height: 38px;
    z-index: 1;
    margin: 0;
    zoom: 1;
    filter: alpha(opacity=0);
    opacity: 0;
  }

  label {
    cursor: pointer;
    padding: 8px 10px 9px 12px;
    display: block;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }

  input[type='radio'] + label::before {
    content: '';
    border: 2px solid;
    background: transparent;
    width: 34px;
    height: 34px;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }

  input[type='radio'] + label::after {
    content: '';
    border: 10px solid;
    width: 0;
    height: 0;
    position: absolute;
    top: 9px;
    left: 9px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    zoom: 1;
    filter: alpha(opacity=0);
    opacity: 0;
  }

  input[type='checkbox'] + label::before {
    content: '';
    border: 2px solid;
    background: transparent;
    width: 34px;
    height: 34px;
    position: absolute;
    top: 0;
    left: 0;
  }

  input[type='checkbox'] + label::after {
    content: '';
    border: solid;
    border-width: 0 0 5px 5px;
    background: transparent;
    border-top-color: transparent;
    width: 17px;
    height: 7px;
    position: absolute;
    top: 10px;
    left: 8px;
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    zoom: 1;
    filter: alpha(opacity=0);
    opacity: 0;
  }

  input[type='radio']:focus + label::before {
    -webkit-box-shadow: 0 0 0 4px #ffbf47;
    -moz-box-shadow: 0 0 0 4px #ffbf47;
    box-shadow: 0 0 0 4px #ffbf47;
  }

  input[type='checkbox']:focus + label::before {
    -webkit-box-shadow: 0 0 0 3px #ffbf47;
    -moz-box-shadow: 0 0 0 3px #ffbf47;
    box-shadow: 0 0 0 3px #ffbf47;
  }

  input:checked + label::after {
    zoom: 1;
    filter: alpha(opacity=100);
    opacity: 1;
  }

  input:disabled {
    cursor: default;
  }

  input:disabled + label {
    zoom: 1;
    filter: alpha(opacity=50);
    opacity: 0.5;
    cursor: default;
  }
`

const radio = css`
  ${govuk_multiple_choice};
  padding: 0 0 0 ${spacing.xl}px;
  margin-bottom: ${spacing.lg}px;

  input {
    width: 24px;
    height: 24px;
  }

  label {
    padding: 0;
    font-size: ${fontSizes.lg};

    span {
      padding: 0 ${spacing.sm}px;
    }
  }

  input[type='radio'] + label::before {
    border: 2px solid ${colours.grey};
    width: 22px;
    height: 22px;
  }

  input[type='radio'] + label::after {
    border: 8px solid ${colours.blue};
    top: 5px;
    left: 5px;
  }
`

const Radio = ({ label, value, name, id, children }) => (
  <div className={radio}>
    <input type="radio" name={name} id={id} value={value} />
    <label htmlFor={id}>
      {label}
      {children}
    </label>
  </div>
)

Radio.propTypes = {
  label: PropTypes.element.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.any,
}

export default Radio
