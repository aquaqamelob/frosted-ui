import * as React from 'react';
import { IconProps } from './types';

export const MessagesQuestion20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M14.3748 11.875H16.0433C16.9638 11.875 17.71 11.1288 17.71 10.2083V4.79167C17.71 3.87119 16.9638 3.125 16.0433 3.125H7.50164C6.58116 3.125 5.83497 3.87119 5.83497 4.79167V6.45833M12.71 6.45833H3.95997C3.0395 6.45833 2.2933 7.20453 2.2933 8.125V13.5417C2.2933 14.4622 3.0395 15.2083 3.95997 15.2083H5.00164V17.2917L8.75168 15.2083H12.71C13.6304 15.2083 14.3767 14.4622 14.3767 13.5417V8.125C14.3767 7.20453 13.6304 6.45833 12.71 6.45833Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.29776 11.4855C8.36951 11.0082 8.63656 10.7504 8.90425 10.5685C9.16601 10.3905 9.42784 10.1595 9.42784 9.73178C9.42784 9.14145 8.9542 8.66333 8.36951 8.66333C7.78475 8.66333 7.31119 9.14145 7.31119 9.73178"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M7.75308 13.1341C7.75308 13.4264 7.99001 13.6633 8.28224 13.6633C8.57448 13.6633 8.81141 13.4264 8.81141 13.1341C8.81141 12.8419 8.57448 12.605 8.28224 12.605C7.99001 12.605 7.75308 12.8419 7.75308 13.1341Z"
          fill={color}
          stroke={color}
          strokeWidth=".5"
        />
      </svg>
    );
  },
);

export default MessagesQuestion20;
