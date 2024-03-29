import * as React from 'react';
import { IconProps } from './types';

export const DownloadDocumentFilled24 = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = 'currentColor', ...props }, forwardedRef) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
      ref={forwardedRef}
    >
      <path
        d="M18.1628 8.27703L13.5776 3.78475V6.86486C13.5776 7.63038 14.2153 8.27703 15.0345 8.27703H18.1628ZM20.75 9.92259C20.75 9.14525 20.4347 8.40291 19.8785 7.85799L13.9989 2.09756L13.9988 2.09754C13.4432 1.55317 12.6928 1.25 11.9135 1.25H6.2069C4.5884 1.25 3.25 2.53941 3.25 4.16216V19.8378C3.25 21.4606 4.58841 22.75 6.2069 22.75H17.7931C19.4116 22.75 20.75 21.4606 20.75 19.8378V9.92259ZM13.0086 11.5C13.0086 11.0858 12.6728 10.75 12.2586 10.75C11.8444 10.75 11.5086 11.0858 11.5086 11.5V16.3266L10.424 15.242C10.1311 14.9491 9.65622 14.9491 9.36333 15.242C9.07044 15.5349 9.07044 16.0098 9.36333 16.3027L11.3642 18.3035C11.8035 18.7428 12.5158 18.7428 12.9551 18.3035L15.1293 16.1293C15.4222 15.8364 15.4222 15.3615 15.1293 15.0687C14.8364 14.7758 14.3616 14.7758 14.0687 15.0687L13.0086 16.1287V11.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default DownloadDocumentFilled24;
