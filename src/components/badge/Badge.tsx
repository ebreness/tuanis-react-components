import * as React from 'react';
import type { CSSProperties, HTMLAttributes, ReactElement } from 'react';
import './Badge.css';

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'capsule' | 'dot';
  color: string;
  borderRadius?: string;
  children: ReactElement;
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
}: BadgeProps): ReactElement => {
  const cssVariables: CSSProperties = {
    '--trc-badge-color': color,
    '--trc-badge-border-radius': borderRadius,
  } as CSSProperties;

  return (
    <div className={`trc-badge trc-${variant}`} style={cssVariables} {...rest}>
      {children}
    </div>
  );
};
