import * as React from 'react';
import { ContainerHead } from './ContainerHead';
import { ContainerBody } from './ContainerBody';
import './Container.css';
import { useTheme } from '../../theme/ThemeContext';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'rounded' | 'fullHeight';
  minWidth?: string;
  children?: React.ReactNode;
}

export const Container = ({
  variant = 'rounded',
  minWidth = 'auto',
  children,
  ...rest
}: ContainerProps): React.ReactElement => {
  const theme = useTheme();

  if (!theme || JSON.stringify(theme) === '{}') {
    return null;
  }

  const cssVariables = {
    '--trc-container-min-width': minWidth
  } as React.CSSProperties;

  return (
    <div
      className={`trc-container variant-${variant}`}
      style={{ ...theme.container['common'], ...theme.container[variant], ...cssVariables }}
      {...rest}
    >
      {children}
    </div>
  );
};

Container.Head = ContainerHead;
Container.Body = ContainerBody;
