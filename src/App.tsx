import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import { Preview } from './Preview'

const DEFAULT_MD = '|left|center|right|\n|:-|:-:|-:|\n|**left**|[center](https://example.com)|right|'

function App() {
  const [md, setMd] = useState((DEFAULT_MD))
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMd(e.target.value)
  }

  return (
    <div>
      <div className="text-center"><h1>Minute Playground</h1></div>
      <div className='container flex flex-row h-screen'>
        <textarea className='w-1-2 h-full' onChange={handleChange} value={md} />
        <Preview className='w-1/2 h-full p-4' md={md} />
      </div>
    </div>
  );
}

export default App;
