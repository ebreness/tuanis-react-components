import * as React from "react";
import {type CSSProperties, type ReactElement} from "react";
import "./Badge.css";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'capsule' | 'dot';
    bgColor: string;
    labelColor?: string;
    fontSize?: string;
    borderRadius?: string,
    children: ReactElement;
}

/**
 * Badge component to display labels with customizable styles.
 *
 * @param {'capsule' | 'dot'} [variant='capsule'] - The shape of the badge. 'capsule' for pill-like, 'dot' for a small circular badge.
 * @param {string} bgColor - The background color of the badge. When variant is 'dot' this parameter represents the dot color.
 * @param {string} [labelColor] - The color of the label text inside the badge. Defaults to the parent's text color.
 * @param {ReactElement} children - The content of the badge, typically text.
 * @param {string} [fontSize] - The font size of the label text inside the badge. Defaults to 0.875rem.
 * @param {string} [borderRadius] - The border-radius of the badge when variant is 'capsule'. Defaults to 0.675rem.
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
                          bgColor,
                          labelColor,
                          children,
                          fontSize,
                          borderRadius,
                          ...rest
                      }: BadgeProps): ReactElement => {

    const cssVariables: CSSProperties = {
        "--trc-badge-bg-color": bgColor,
        "--trc-badge-label-color": labelColor,
        "--trc-badge-label-font-size": fontSize,
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
