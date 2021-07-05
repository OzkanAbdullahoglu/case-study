/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import { TextPrimary, TextSecondary, TextProps } from './Themed';

export function MonoText(props: TextProps): JSX.Element {
  return (
    <TextPrimary
      {...props}
      style={[props.style, { fontFamily: 'gotham-book' }]}
    />
  );
}
export function MediumText(props: TextProps): JSX.Element {
  return (
    <TextPrimary
      {...props}
      style={[props.style, { fontFamily: 'gotham-medium' }]}
    />
  );
}
export function MediumTextSecondary(props: TextProps): JSX.Element {
  return (
    <TextSecondary
      {...props}
      style={[props.style, { fontFamily: 'gotham-medium' }]}
    />
  );
}
export function LightText(props: TextProps): JSX.Element {
  return (
    <TextSecondary
      {...props}
      style={[props.style, { fontFamily: 'gotham-light', fontWeight: '800' }]}
    />
  );
}
