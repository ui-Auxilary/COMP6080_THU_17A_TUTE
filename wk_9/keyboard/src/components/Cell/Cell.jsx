import React from 'react'
import S from './styles.module.css'
export default function Cell({content, key}) {
  return (
      <div
        className={S.cell}
        key={key}
      >
        {content}
      </div>
  )
}
