import * as React from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { LayoutRow } from './LayoutRow';
import './Layout.css';

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: 'centered';
  children?: React.ReactNode;
}

export const Layout = ({
  variant = 'centered',
  children,
  ...rest
}: LayoutProps): React.ReactElement => {
  const theme = useTheme();

  if (!theme || JSON.stringify(theme) === '{}') {
    return null;
  }

  return (
    <div className={`trc-layout variant-${variant}`} {...rest}>
      {children}
    </div>
  );
};

Layout.Row = LayoutRow;
