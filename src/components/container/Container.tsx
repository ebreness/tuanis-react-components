import * as React from 'react';
import { ContainerHead } from './ContainerHead';
import { ContainerBody } from './ContainerBody';
import './Container.css';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'rounded' | 'full-height';
  bgColor: string;
  topOffset: string;
  children?: React.ReactNode;
}

export const Container = ({
  variant = 'rounded',
  bgColor,
  topOffset,
  children,
  ...rest
}: ContainerProps): React.ReactElement => {
  const cssVariables = {
    '--trc-container-bg-color': bgColor,
    '--trc-container-top-offset': topOffset
  } as React.CSSProperties;

  return (
    <div className={`trc-container variant-${variant}`} style={cssVariables} {...rest}>
      {children}
    </div>
  );
};

Container.Head = ContainerHead;
Container.Body = ContainerBody;
