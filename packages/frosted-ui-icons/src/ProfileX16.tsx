import * as React from 'react';
import { IconProps } from './types';

export const ProfileX16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.3341 10.6666L12.0008 12M12.0008 12L10.6675 13.3333M12.0008 12L10.6675 10.6666M12.0008 12L13.3341 13.3333M7.9024 8.83418C5.69028 8.87251 4.01455 10.2038 3.32244 12.0752C3.0499 12.8121 3.67909 13.5 4.46476 13.5H8.16746M7.9024 8.83418C7.93506 8.83358 7.96786 8.83331 8.0008 8.83331C8.34753 8.83331 8.6814 8.86491 9.0008 8.92525M7.9024 8.83418C7.469 8.84171 7.0564 8.89885 6.66753 8.99998M10.5008 4.33331C10.5008 5.71403 9.38146 6.83331 8.0008 6.83331C6.62007 6.83331 5.50078 5.71403 5.50078 4.33331C5.50078 2.9526 6.62007 1.83331 8.0008 1.83331C9.38146 1.83331 10.5008 2.9526 10.5008 4.33331Z"
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

export default ProfileX16;
