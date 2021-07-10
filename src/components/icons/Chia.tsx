import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as InanIcon } from './images/Inan.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={InanIcon} viewBox="0 0 150 58" {...props} />;
}
