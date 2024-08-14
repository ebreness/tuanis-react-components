import * as React from 'react';
import './Badge.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'capsule' | 'dot';
  color: string;
  borderRadius?: string;
  children: React.ReactNode;
}

/**
 * Badge component to display labels with customizable styles.
 * @param variant The shape of the badge. 'capsule' for pill-like, 'dot' for a small circular badge.
 * @param color The background color of the badge. When variant is 'dot' this parameter represents the dot color.
 * @param children The content of the badge, typically a <span> element.
 * @param borderRadius The border-radius of the badge when variant is 'capsule'. Defaults to 1rem.
 * @param rest Additional props passed to the badge element.
 * @constructor
 * @example
 * ```js
 * import { Badge } from "@tuanis/react-components";
 * <Badge variant="dot" bgColor="#FF0000"><span>Text</span></Badge>
 * ```
 */
export const Badge = ({
  variant = 'capsule',
  color,
  children,
  borderRadius,
  ...rest
}: BadgeProps): React.ReactElement => {
  const cssVariables = {
    '--trc-badge-color': color,
    '--trc-badge-border-radius': borderRadius
  } as React.CSSProperties;

  return (
    <div className={`trc-badge trc-${variant}`} style={cssVariables} {...rest}>
      {children}
    </div>
  );
};
