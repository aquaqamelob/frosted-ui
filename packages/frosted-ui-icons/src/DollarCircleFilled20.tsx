import * as React from 'react';
import { IconProps } from './types';

export const DollarCircleFilled20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM8.375 6C7.06332 6 6 7.06332 6 8.375C6 9.68668 7.06332 10.75 8.375 10.75H11.625C12.1082 10.75 12.5 11.1418 12.5 11.625C12.5 12.1082 12.1082 12.5 11.625 12.5H10H7.25C6.83579 12.5 6.5 12.8358 6.5 13.25C6.5 13.6642 6.83579 14 7.25 14H9.25V15.25C9.25 15.6642 9.58579 16 10 16C10.4142 16 10.75 15.6642 10.75 15.25V14H11.625C12.9367 14 14 12.9367 14 11.625C14 10.3133 12.9367 9.25 11.625 9.25H8.375C7.89175 9.25 7.5 8.85825 7.5 8.375C7.5 7.89175 7.89175 7.5 8.375 7.5H10H12.75C13.1642 7.5 13.5 7.16421 13.5 6.75C13.5 6.33579 13.1642 6 12.75 6H10.75V4.75C10.75 4.33579 10.4142 4 10 4C9.58579 4 9.25 4.33579 9.25 4.75V6H8.375Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          fillOpacity=".875"
        />
      </svg>
    );
  },
);

export default DollarCircleFilled20;
