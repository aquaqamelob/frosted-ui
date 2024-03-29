import * as React from 'react';
import { IconProps } from './types';

export const MobilePhone16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M6.49998 12.3958H9.49998M5.83331 14.8333H10.1666C11.2712 14.8333 12.1666 13.9379 12.1666 12.8333V3.16666C12.1666 2.06209 11.2712 1.16666 10.1666 1.16666H5.83331C4.72875 1.16666 3.83331 2.06209 3.83331 3.16666V12.8333C3.83331 13.9379 4.72875 14.8333 5.83331 14.8333Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default MobilePhone16;
