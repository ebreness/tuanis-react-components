import * as React from 'react';
import './ContainerHead.css';

export interface ContainerHeadProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
export const ContainerHead = ({ children, ...rest }: ContainerHeadProps): React.ReactElement => {
  return (
    <div className={`trc-container-head`} {...rest}>
      {children}
    </div>
  );
};
