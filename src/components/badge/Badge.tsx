import * as React from "react";
import type {ReactElement} from "react";
// import {classes} from "./Badge.module.css";
// import {cn} from "../../lib/utils";

type BadgeProps = {
    variant: 'green' | 'red',
    text: string
} & React.HTMLAttributes<HTMLDivElement>;

export const Badge = ({text, ...rest}: BadgeProps): ReactElement => {
    return (
        // <div className={`${cn(classes, 'badge')}`}  {...rest}>
        <div {...rest}>
            {text}
        </div>
    )
}