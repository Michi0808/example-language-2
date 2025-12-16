import { useState } from 'react'
import LangHeader from './components/LangHeader';

function App() {
  const [lang, setLang] = useState('English');

  const toggleLang = (e) => {
    const newLang = e.target.value;
    setLang(newLang);
  }

  return (
    <LangHeader lang={lang} toggleLang={toggleLang} />
  )
}

export default App