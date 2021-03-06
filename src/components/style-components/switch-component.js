import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/system';
import { useSwitch } from '@mui/base/SwitchUnstyled';

const blue = {
  500: '#7073BE',
};

const grey = {
  400: '#BFC7CF',
  500: '#AAB4BE',
};

const BasicSwitchRoot = styled('span')`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 55px;
  height: 30px;
  margin: 10px;
  background: ${grey[400]};
  border-radius: 30px;
  cursor: pointer;
  &.Switch-disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  &.Switch-checked {
    background: ${blue[500]};
  }
`;

const BasicSwitchInput = styled('input')`
  cursor: inherit;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right:0;
  opacity: 0;
  z-index: 1;
  margin: 0;
`;

const BasicSwitchThumb = styled('span')`
  display: block;
  width: 23px;
  height: 23px;
  top: 3px;
  left: 3px;
  
  border-radius: 16px;
  background-color: #fff;
  position: relative;
  transition: all 200ms ease;
  &.Switch-focusVisible {
    background-color: ${grey[500]};
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }
  &.Switch-checked {
    left: 28px;
    top: 3px;
    background-color: #fff;
  }
`;

function BasicSwitch(props) {
  const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

  const stateClasses = {
    'Switch-checked': checked,
    'Switch-disabled': disabled,
    'Switch-focusVisible': focusVisible,
  };

  return (
    <BasicSwitchRoot className={clsx(stateClasses)}>
      <BasicSwitchThumb className={clsx(stateClasses)} />
      <BasicSwitchInput {...getInputProps()} aria-label="Demo switch" />
    </BasicSwitchRoot>
  );
}

export default function UseSwitchesBasic() {
  return (
    <div>
      <BasicSwitch defaultChecked />
      {/* <BasicSwitch />
      <BasicSwitch defaultChecked disabled />
      <BasicSwitch disabled /> */}
    </div>
  );
}