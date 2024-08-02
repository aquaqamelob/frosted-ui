import * as React from 'react';
import { IconProps } from './types';

export const MessageEdit20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M10.625 3.4375H3.95829C3.03782 3.4375 2.29163 4.25831 2.29163 5.27083V14.8958C2.29163 15.9084 3.03782 16.7292 3.95829 16.7292H7.20981C7.40558 16.7292 7.59511 16.805 7.74514 16.9433L9.46604 18.5301C9.77429 18.8144 10.2232 18.8158 10.533 18.5334L12.2816 16.9399C12.431 16.8037 12.6191 16.7292 12.8132 16.7292H16.0416C16.9621 16.7292 17.7083 15.9084 17.7083 14.8958V11.2292"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M15.4119 2.95681L13.3399 5.2361C12.8816 5.74016 12.593 6.40076 12.5214 7.10924L12.4959 7.3621C12.442 7.89529 12.8516 8.34582 13.3363 8.28657L13.5662 8.25848C14.2103 8.17976 14.8108 7.86226 15.269 7.3582L17.3411 5.07891M15.4119 2.95681L16.1354 2.16103C16.6681 1.57502 17.5318 1.57502 18.0646 2.16103V2.16103C18.5973 2.74703 18.5973 3.69712 18.0646 4.28312L17.3411 5.07891M15.4119 2.95681L17.3411 5.07891"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M10 10.8855C9.59733 10.8855 9.27083 10.5263 9.27083 10.0834 9.27083 9.64045 9.59733 9.2813 10 9.2813 10.4027 9.2813 10.7292 9.64045 10.7292 10.0834 10.7292 10.5263 10.4027 10.8855 10 10.8855zM5.93717 10.8855C5.53451 10.8855 5.20801 10.5263 5.20801 10.0834 5.20801 9.64045 5.53451 9.2813 5.93717 9.2813 6.33984 9.2813 6.66634 9.64045 6.66634 10.0834 6.66634 10.5263 6.33984 10.8855 5.93717 10.8855z"
          fill={color}
        />
        <path
          d="M5.08301 10.0834C5.08301 9.56451 5.46547 9.1438 5.93717 9.1438C6.40888 9.1438 6.79134 9.56451 6.79134 10.0834C6.79134 10.6023 6.40888 11.023 5.93717 11.023C5.46547 11.023 5.08301 10.6023 5.08301 10.0834ZM5.93717 9.4188C5.60354 9.4188 5.33301 9.71639 5.33301 10.0834C5.33301 10.4504 5.60354 10.748 5.93717 10.748C6.27081 10.748 6.54134 10.4504 6.54134 10.0834C6.54134 9.71639 6.27081 9.4188 5.93717 9.4188ZM9.14583 10.0834C9.14583 9.56451 9.5283 9.1438 10 9.1438C10.4717 9.1438 10.8542 9.56451 10.8542 10.0834C10.8542 10.6023 10.4717 11.023 10 11.023C9.5283 11.023 9.14583 10.6023 9.14583 10.0834ZM10 9.4188C9.66637 9.4188 9.39583 9.71639 9.39583 10.0834C9.39583 10.4504 9.66637 10.748 10 10.748C10.3336 10.748 10.6042 10.4504 10.6042 10.0834C10.6042 9.71639 10.3336 9.4188 10 9.4188Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default MessageEdit20;
