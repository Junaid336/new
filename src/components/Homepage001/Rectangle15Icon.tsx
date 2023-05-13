import { memo, SVGProps } from 'react';

const Rectangle15Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 44' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H39.25V44H0' stroke='#1C1C1C' strokeWidth={1.5} />
  </svg>
);

const Memo = memo(Rectangle15Icon);
export { Memo as Rectangle15Icon };
