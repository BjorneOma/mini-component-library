import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    textLeftPadding: 24,
    textPaddingBottom: 3,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    textLeftPadding: 36,
    textPaddingBottom: 4,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const selectedSize = SIZES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': selectedSize.iconSize + 'px' }}>
        <Icon
          id={icon}
          size={selectedSize.iconSize}
          strokeWidth={selectedSize.borderThickness}
        ></Icon>
      </IconWrapper>
      <Input
        id={label}
        style={{
          '--width': width + 'px',
          '--fontSize': selectedSize.fontSize + 'px',
          '--borderThickness': selectedSize.borderThickness + 'px',
          '--textLeftPadding': selectedSize.textLeftPadding + 'px',
          '--textPaddingBottom': selectedSize.textPaddingBottom + 'px',
        }}
        placeholder={placeholder}
      ></Input>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const Input = styled.input`
  border: none;
  border-bottom: solid var(--borderThickness) ${COLORS.black};
  color: inherit;
  font-size: var(--fontSize);
  font-weight: 700;
  outline-offset: 2px;
  padding-left: var(--textLeftPadding);
  padding-bottom: var(--textPaddingBottom);
  width: var(--width);

  ::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  :hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
