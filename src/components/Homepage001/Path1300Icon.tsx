import { memo, SVGProps } from 'react';

const Path1300Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 135 60' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H135V59.48H0V0Z' fill='#11265F' />
  </svg>
);

const Memo = memo(Path1300Icon);
export { Memo as Path1300Icon };
