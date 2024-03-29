import * as React from 'react';
import { IconProps } from './types';

export const Checklist32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M7.75 5.5C6.7835 5.5 6 6.2835 6 7.25V27.75C6 28.7165 6.7835 29.5 7.75 29.5H24.25C25.2165 29.5 26 28.7165 26 27.75V7.25C26 6.2835 25.2165 5.5 24.25 5.5H22.125C21.7108 5.5 21.375 5.16421 21.375 4.75C21.375 4.33579 21.7108 4 22.125 4H24.25C26.0449 4 27.5 5.45507 27.5 7.25V27.75C27.5 29.5449 26.0449 31 24.25 31H7.75C5.95507 31 4.5 29.5449 4.5 27.75V7.25C4.5 5.45507 5.95507 4 7.75 4H9.875C10.2892 4 10.625 4.33579 10.625 4.75C10.625 5.16421 10.2892 5.5 9.875 5.5H7.75Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M16 12.25C16 11.8358 16.3358 11.5 16.75 11.5H22.25C22.6642 11.5 23 11.8358 23 12.25 23 12.6642 22.6642 13 22.25 13H16.75C16.3358 13 16 12.6642 16 12.25zM16 18.25C16 17.8358 16.3358 17.5 16.75 17.5H22.25C22.6642 17.5 23 17.8358 23 18.25 23 18.6642 22.6642 19 22.25 19H16.75C16.3358 19 16 18.6642 16 18.25zM16 24.25C16 23.8358 16.3358 23.5 16.75 23.5H22.25C22.6642 23.5 23 23.8358 23 24.25 23 24.6642 22.6642 25 22.25 25H16.75C16.3358 25 16 24.6642 16 24.25zM13.7517 10.1925C14.0596 10.4696 14.0846 10.9438 13.8075 11.2517L11.5575 13.7517C11.4119 13.9135 11.2033 14.004 10.9857 13.9999 10.7682 13.9957 10.5631 13.8973 10.4238 13.7301L9.17383 12.2301C8.90866 11.9119 8.95165 11.439 9.26986 11.1738 9.58807 10.9087 10.061 10.9517 10.3262 11.2699L11.0218 12.1046 12.6925 10.2483C12.9696 9.94039 13.4438 9.91543 13.7517 10.1925zM13.7517 16.1925C14.0596 16.4696 14.0846 16.9438 13.8075 17.2517L11.5575 19.7517C11.4119 19.9135 11.2033 20.004 10.9857 19.9999 10.7682 19.9957 10.5631 19.8973 10.4238 19.7301L9.17383 18.2301C8.90866 17.9119 8.95165 17.439 9.26986 17.1738 9.58807 16.9087 10.061 16.9517 10.3262 17.2699L11.0218 18.1046 12.6925 16.2483C12.9696 15.9404 13.4438 15.9154 13.7517 16.1925zM13.7517 22.1925C14.0596 22.4696 14.0846 22.9438 13.8075 23.2517L11.5575 25.7517C11.4119 25.9135 11.2033 26.004 10.9857 25.9999 10.7682 25.9957 10.5631 25.8973 10.4238 25.7301L9.17383 24.2301C8.90866 23.9119 8.95165 23.439 9.26986 23.1738 9.58807 22.9087 10.061 22.9517 10.3262 23.2699L11.0218 24.1046 12.6925 22.2483C12.9696 21.9404 13.4438 21.9154 13.7517 22.1925zM14.9547 2C14.8491 2 14.7548 2.06642 14.7193 2.16592L14.242 3.50225C14.1354 3.80075 13.8527 4 13.5357 4H11.2513C11.112 4 11 4.1132 11 4.25V5.75C11 5.88807 11.1119 6 11.25 6H20.75C20.8881 6 21 5.88807 21 5.75V4.25C21 4.1132 20.888 4 20.7487 4H18.4643C18.1473 4 17.8646 3.80075 17.758 3.50225L17.2807 2.16592C17.2452 2.06642 17.1509 2 17.0453 2H14.9547zM13.3067 1.66141C13.5554.964924 14.2151.5 14.9547.5H17.0453C17.7849.5 18.4446.964925 18.6933 1.66141L18.9928 2.5H20.7487C21.7139 2.5 22.5 3.28223 22.5 4.25V5.75C22.5 6.7165 21.7165 7.5 20.75 7.5H11.25C10.2835 7.5 9.5 6.7165 9.5 5.75V4.25C9.5 3.28223 10.2861 2.5 11.2513 2.5H13.0072L13.3067 1.66141z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Checklist32;
