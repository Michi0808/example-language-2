import React from 'react'
import LangContent from './LangContent'

export default function LangHeader({ lang, toggleLang }) {
  return (
    <>
      <div>LangHeader</div>
      <LangContent lang={lang} toggleLang={toggleLang} />
    </>
  )
}
