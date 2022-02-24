/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <VisuallyHidden>
        <label for={label}>{label}</label>
      </VisuallyHidden>
      <NativeSelect value={value} onChange={onChange} id={label}>
        {children}
      </NativeSelect>
      <PresentationBit>
        {displayedValue}
        <IconWrapper>
          <Icon id='chevron-down' size={24} strokeWidth={2}></Icon>
        </IconWrapper>
      </PresentationBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
`;

const PresentationBit = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: ${COLORS.transparentGray15};
  line-height: 1.25rem;
  font-size: 1rem;
  padding: 12px 16px;
  border-radius: 8px;
  overflow: hidden;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const IconWrapper = styled.div`
  margin: -6px 0;
`;

export default Select;
