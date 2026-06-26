import { useState } from 'react'

const QuestionForm = () => {
  const [inputValue, setInputValue] = useState('Posez votre question ici')
  const [isInputError, setIsInputError] = useState(false)

  const checkValue = (value) => {
    if (!value.includes('f')) {
      setInputValue(value)
      setIsInputError(false)
    } else {
      setIsInputError(true)
    }
  }

  return (
    <div>
      <textarea
            value={inputValue}
        onChange={(e) => checkValue(e.target.value)}
      />
      {isInputError && (
        <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>
     )}
      <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
    </div>
  )
}



export default QuestionForm
