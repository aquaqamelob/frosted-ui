import * as React from 'react';
import { IconProps } from './types';

export const FacebookFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.38937 14.4707V10.0374H5.01344V8.00001H6.38937V7.12221C6.38937 4.85297 7.41601 3.80223 9.64268 3.80223C10.0642 3.80223 10.7919 3.88482 11.0909 3.96742V5.81297C10.9334 5.79705 10.6586 5.7889 10.3201 5.7889C9.22674 5.7889 8.80528 6.20223 8.80528 7.27961V8.00001H10.9842L10.6109 10.0371H8.80828V14.6185C12.1091 14.2186 14.6667 11.408 14.6667 8.00001C14.6667 4.31816 11.6819 1.33334 8.00001 1.33334C4.31816 1.33334 1.33334 4.31816 1.33334 8.00001C1.33334 11.1266 3.48543 13.7502 6.38937 14.4707Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default FacebookFilled16;
