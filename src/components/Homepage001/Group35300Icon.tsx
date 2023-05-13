import { memo, SVGProps } from 'react';

const Group35300Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 813 423' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g opacity={0.14} filter='url(#filter0_d_32_22009)'>
      <path d='M0 422.528H813V0.214185H0V422.528Z' fill='#5371E4' />
    </g>
    <defs>
      <filter
        id='filter0_d_32_22009'
        x={-4}
        y={-2.78581}
        width={827}
        height={436.314}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dx={3} dy={4} />
        <feGaussianBlur stdDeviation={3.5} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_32_22009' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_32_22009' result='shape' />
      </filter>
    </defs>
  </svg>
);

const Memo = memo(Group35300Icon);
export { Memo as Group35300Icon };
