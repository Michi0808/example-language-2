import { useState } from 'react'
import LangHeader from './components/LangHeader';
import { LangContext } from './generateContext';

function App() {
  const [lang, setLang] = useState('English');

  const toggleLang = (e) => {
    const newLang = e.target.value;
    setLang(newLang);
  }

  return (
    // Wrap the component tree with the Provider
    <LangContext.Provider value={{ lang, toggleLang }}>
      {/* No need to pass props down anymore. */}
      <LangHeader />
    </LangContext.Provider>
  )
}

export default App