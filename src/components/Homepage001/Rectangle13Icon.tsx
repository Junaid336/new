import { memo, SVGProps } from 'react';

const Rectangle13Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 44' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path opacity={0.4} d='M39.25 0H0V44H39.25' stroke='#1C1C1C' strokeWidth={1.5} />
  </svg>
);

const Memo = memo(Rectangle13Icon);
export { Memo as Rectangle13Icon };
