import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as inanIcon } from './images/inan.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={inanIcon} viewBox="0 0 150 58" {...props} />;
}
