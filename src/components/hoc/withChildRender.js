import React from 'react';

export const withChildRender = (render) => (Wrapped) => {
  return (props) => {
      return (
          <Wrapped {...props}>
              {render}
          </Wrapped>
      );
  };
};
