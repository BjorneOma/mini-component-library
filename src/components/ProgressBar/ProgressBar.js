/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: 8,
    padding: 0,
    borderRadius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    borderRadius: 4,
  },
  large: {
    height: 24,
    padding: 4,
    borderRadius: 8,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <Wrapper
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin='0'
      aria-valuemax='100'
      style={{
        '--borderRadius': styles.borderRadius + 'px',
        '--padding': styles.padding + 'px',
      }}
    >
      <FillWrapper>
        <Fill
          style={{ '--width': value + '%', '--height': styles.height + 'px' }}
        >
          <VisuallyHidden>{value}%</VisuallyHidden>
        </Fill>
      </FillWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--borderRadius);
`;

const FillWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

const Fill = styled.div`
  background-color: ${COLORS.primary};
  height: var(--height);
  width: var(--width);
`;

export default ProgressBar;
