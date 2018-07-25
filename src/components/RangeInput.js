import styled from 'styled-components';

const RangeInput = styled.input.attrs({ type: 'range' })`
  height: 28px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #0094ff;
    border-radius: 0px;
    border: 0px solid #010101;
  }
  &::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000031;
    border: 2px solid #0094ff;
    height: 20px;
    width: 20px;
    border-radius: 15px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -8px;
  }
  &:focus::-webkit-slider-runnable-track {
    background: #0094ff;
  }
  &::-moz-range-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #0094ff;
    border-radius: 0px;
    border: 0px solid #010101;
  }
  &::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000031;
    border: 2px solid #0094ff;
    height: 20px;
    width: 20px;
    border-radius: 15px;
    background: #ffffff;
    cursor: pointer;
  }
  &::-ms-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  &::-ms-fill-lower {
    background: #0094ff;
    border: 0px solid #010101;
    border-radius: 0px;
    box-shadow: 0px 0px 0px #000000;
  }
  &::-ms-fill-upper {
    background: #0094ff;
    border: 0px solid #010101;
    border-radius: 0px;
    box-shadow: 0px 0px 0px #000000;
  }
  &::-ms-thumb {
    margin-top: 1px;
    box-shadow: 0px 0px 0px #000031;
    border: 2px solid #0094ff;
    height: 20px;
    width: 20px;
    border-radius: 15px;
    background: #ffffff;
    cursor: pointer;
  }
  &:focus::-ms-fill-lower {
    background: #0094ff;
  }
  &:focus::-ms-fill-upper {
    background: #0094ff;
  }
`;

export default RangeInput;
