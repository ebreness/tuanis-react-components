import React, { useEffect, useRef } from 'react';
import './LayoutRow.css';

export interface LayoutRowProps extends React.HTMLAttributes<HTMLDivElement> {
  widths?: number[];
  children?: React.ReactNode;
}

export const LayoutRow = ({ widths = [], children }: LayoutRowProps): React.ReactElement => {
  const layoutRowRef = useRef<HTMLDivElement>(null); // Initialize ref with null

  // Check if the number of widths matches the number of children
  if (widths.length !== React.Children.count(children)) {
    throw new Error(
      'The number of children in the LayoutRow must match the length of the widths array.'
    );
  }

  useEffect(() => {
    if (layoutRowRef.current) {
      const childNodes = layoutRowRef.current.children;

      Array.from(childNodes).forEach((child, index) => {
        (child as HTMLElement).style.flex = `${widths[index]} 1 auto`;
        child.classList.add('layout-row-child');
      });
    }
  }, [widths]);

  return (
    <div className='trc-layout-row' ref={layoutRowRef}>
      {children}
    </div>
  );
};
