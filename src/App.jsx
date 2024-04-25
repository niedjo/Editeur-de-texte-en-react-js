import { useEffect, useState } from 'react'
import { sampleText } from './sampleText'
import { marked } from 'marked'
function App() {
  const renderText = text => marked(text, { sanitize : false})
  const [Text, setText] = useState(sampleText)

  useEffect(() => {
    return () => {
      console.log('mount1')
      let texte = localStorage.getItem('text')
      if (texte) {
        setText(texte)
      }
      else {
        setText(sampleText)
      }
    };
  }, [])

  useEffect(() => {
    return () => {
      console.log('mount2')
      localStorage.setItem('text', Text)
    };
  }, [Text])


  return (
    <>
      <div>js suis cool</div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea 
              defaultValue={Text} 
              rows={35} 
              className="form-control"
              onChange={(e) => {setText(e.target.value)}}
            ></textarea>
          </div>
          <div className="col-sm-6">
            <div dangerouslySetInnerHTML={{__html: renderText(Text)}} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
