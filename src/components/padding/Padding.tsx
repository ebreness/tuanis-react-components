import * as React from 'react';
import './Padding.css';

export interface PaddingProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}

export const Padding = ({ size = 'md', children, ...rest }: PaddingProps): React.ReactElement => {
  return (
    <div className={`trc-padding size-${size}`} {...rest}>
      {children}
    </div>
  );
};
