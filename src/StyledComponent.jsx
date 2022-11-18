import React from 'react';
import styled, { css } from 'styled-components';

export default function StyledComponent() {
  const Container = styled.div`
    display: flex;
  `;

  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #3c5b68;
    ${(props) =>
      props.primary &&
      css`
        background: #009cd5;
        color: white;
      `}
  `;

  return (
    <div>
      <Container>
        <Button>Nomal</Button>
        <Button primary>Primary</Button>
      </Container>
    </div>
  );
}
