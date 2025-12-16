import React from 'react'

export default function LangContent({ lang, toggleLang }) {
  const LANGUAGES = ['English', 'German', 'Japanese'];

  return (
    <>
    <div>LangContent</div>
    <p>current setting is: {lang}</p>
    {LANGUAGES.map(l => {
      return (
        <React.Fragment key={l}>
          <label htmlFor={l}>{l}</label>
          <input id={l}
          name='lang'
          type='radio'
          value={l}
          onChange={toggleLang}
          checked={lang === l}
            ></input>
        </React.Fragment>
      );
    })}
    </>
  )
}
