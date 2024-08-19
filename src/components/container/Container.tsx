import * as React from 'react';
import { ContainerHead } from './ContainerHead';
import { ContainerBody } from './ContainerBody';
import './Container.css';
import { useTheme } from '../../theme/ThemeContext';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'rounded' | 'fullHeight';
  children?: React.ReactNode;
}

export const Container = ({
  variant = 'rounded',
  children,
  ...rest
}: ContainerProps): React.ReactElement => {
  const theme = useTheme();

  if (!theme || JSON.stringify(theme) === '{}') {
    return null;
  }

  return (
    <div
      className={`trc-container variant-${variant}`}
      style={{ ...theme.container, ...theme.container[variant] }}
      {...rest}
    >
      {children}
    </div>
  );
};

Container.Head = ContainerHead;
Container.Body = ContainerBody;
