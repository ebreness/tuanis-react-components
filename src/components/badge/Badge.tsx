import * as React from "react";
import {type CSSProperties, type ReactElement} from "react";
import "./Badge.css";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'capsule' | 'dot';
    color: string;
    borderRadius?: string,
    children: ReactElement;
}

/**
 * Badge component to display labels with customizable styles.
 *
 * @param {'capsule' | 'dot'} [variant='capsule'] - The shape of the badge. 'capsule' for pill-like, 'dot' for a small circular badge.
 * @param {string} color - The background color of the badge. When variant is 'dot' this parameter represents the dot color.
 * @param {ReactElement} children - The content of the badge, typically text.
 * @param {string} [borderRadius] - The border-radius of the badge when variant is 'capsule'. Defaults to 1rem.
 * @param {React.HTMLAttributes<HTMLDivElement>} rest - Additional props passed to the badge element.
 * @returns {ReactElement} A styled badge element with the specified properties.
 * @constructor
 * @example
 * ```js
 * import { Badge } from "@tuanis/react-components";
 * <Badge variant="dot" bgColor="#FF0000">Test</Badge>
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
        "--trc-badge-color": color,
        "--trc-badge-border-radius": borderRadius,
    } as CSSProperties;

    return (
        <div
            className={`trc-badge trc-${variant}`}
            style={cssVariables}
            {...rest}
        >
            {children}
        </div>
    );
};
