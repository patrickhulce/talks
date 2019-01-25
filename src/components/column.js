import * as React from 'react'

export function Row(props) {
  return <div style={{display: 'flex', flexDirection: 'row', ...props.style}}>{props.children}</div>
}

export function Column(props) {
  return <div style={props.style}>{props.children}</div>
}
