import * as React from 'react'

export function Span(props) {
  const color = props.theme && props.theme.colors.heading
  const style = {color, ...props.style}
  return <span style={style}>{props.children}</span>
}
