import type { PropsWithChildren, SVGProps } from 'react';

export interface SvgProps extends SVGProps<SVGSVGElement> {
  /**
   * @default `24`
   *
   * width, height 값입니다. 사전 지정된 width, height이 존재한다면 무시됩니다.
   */
  size?: number;

  /**
   * @default `24`
   *
   * width 값입니다. size가 존재하더라도 해당 값이 사용됩니다.
   */
  width?: number;

  /**
   * @default `24`
   *
   * height 값입니다. size가 존재하더라도 해당 값이 사용됩니다.
   */
  height?: number;

  /**
   * @default `currentColor`
   *
   * fill 색상 값입니다. `isUsingFill`로 사용하지 않을 수 있습니다.
   */
  color?: string;

  /**
   * @default `false`
   *
   * `color` prop으로 fill을 사용할 지에 대한 여부입니다.
   *
   * 보통은 사용되지 않으나 SVG의 구성이 특이하여 parent의 fill로는 해결되지 않을 때에 사용합니다.
   */
  isUsingFill?: boolean;
}

export default function Svg({
  size,
  width,
  height,
  color,
  isUsingFill = false,
  children,
  viewBox = '0 0 24 24',
  ...rest
}: PropsWithChildren<SvgProps>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? size ?? 24}
      height={height ?? size ?? 24}
      fill={isUsingFill ? color ?? 'currentColor' : 'none'}
      viewBox={viewBox}
      {...rest}
    >
      {children}
    </svg>
  );
}
