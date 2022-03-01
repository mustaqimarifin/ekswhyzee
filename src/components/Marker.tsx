import clsx from 'clsx';
import React from 'react';

const Marker = ({ children, className, ...rest }) => {
  return (
    <h2 className={clsx('marker', className)} {...rest}>
      <span>{children}</span>
    </h2>
  );
};

export default Marker;
