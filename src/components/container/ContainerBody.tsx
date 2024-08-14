import * as React from 'react';
import './ContainerBody.css';

export interface ContainerBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
export const ContainerBody = ({ children, ...rest }: ContainerBodyProps): React.ReactElement => {
  return (
    <div className={`trc-container-body`} {...rest}>
      {children}
    </div>
  );
};
