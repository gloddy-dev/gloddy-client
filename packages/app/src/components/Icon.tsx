import {ColorValue} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {ICON_SVG, ICON_SVG_KEY} from '../../image';

export type IconName = ICON_SVG_KEY;

export interface IconProps extends SvgProps {
  name: IconName;
  color?: ColorValue;
}

const Icon = (props: IconProps) => {
  const SVGIcon = ICON_SVG[props.name];
  return <SVGIcon {...props} />;
};

export default Icon;
