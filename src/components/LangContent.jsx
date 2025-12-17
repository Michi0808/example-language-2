import React from 'react'
import { useContext } from 'react';
import { LangContext } from '../generateContext';

export default function LangContent(  ) {
  const LANGUAGES = ['English', 'German', 'Japanese'];

  // Now you can read the values provided by the nearest Provider.
  const { lang, toggleLang } = useContext(LangContext);

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
