import * as React from 'react';
import { IconProps } from './types';

export const Wallet16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.8329 4.33333C12.8329 3.689 12.3105 2.78125 11.6662 2.78125H2.6328C2.17256 2.78125 1.79947 3.53976 1.79947 4M1.79947 4V11.5C1.79947 12.2364 2.39642 12.8333 3.1328 12.8333H12.7995C13.5359 12.8333 14.1328 12.2364 14.1328 11.5V6.16667C14.1328 5.43029 13.5359 4.83333 12.7995 4.83333H2.6328C2.17256 4.83333 1.79947 4.46024 1.79947 4ZM11.4995 8.83333C11.4995 9.10947 11.2757 9.33333 10.9995 9.33333C10.7234 9.33333 10.4995 9.10947 10.4995 8.83333C10.4995 8.5572 10.7234 8.33333 10.9995 8.33333C11.2757 8.33333 11.4995 8.5572 11.4995 8.83333Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Wallet16;
