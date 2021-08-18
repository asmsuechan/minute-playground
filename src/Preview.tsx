import React from 'react'
import { convertToHTMLString } from 'minutemd'

type Props = {
  md: string;
  className?: string;
}

export const Preview = ({ md, className }: Props) => {
  return (
    <div className={className} dangerouslySetInnerHTML={{__html: convertToHTMLString(md)}} />
  )
}