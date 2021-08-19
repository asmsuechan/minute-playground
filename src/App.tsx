import React, { useState } from 'react'
import './App.css';
import { Preview } from './Preview'

const DEFAULT_MD = '# h1\n## h2\n### h3\n#### h4\n\n## Texts\n**bold**\n\n__italic__\n\n~~strike~~\n\n[asmsuechan.com](https://asmsuechan.com)\n\n![profpic](https://avatars2.githubusercontent.com/u/11307908)\n\n## List\n* **bold**\n  * __nested__\n  * ~~nested~~\n* indent level 0\n\n+ plus mark\n  + nested\n\n- minus mark\n  - nested\n\n1. a\n  2. b**bold**\n\n## Table\n|left|center|right|\n|:-|:-:|-:|\n|**left**|[center](https://example.com)|right|\n\n## Blockquote\n> quote\n>> nested quote\n\n## Code\n```\nconsole.log(\'Hello, world!\')\n```'

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
