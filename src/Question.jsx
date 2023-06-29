import React, { useState } from 'react'

const Question = ({question}) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <div className={isOpen ? 'open' : 'closes'}>
      <h4>{question.title}</h4>
        <button id="button" onClick={()=>setIsOpen(!isOpen)}>{isOpen ? '-':'+'}</button>
      </div>
      {isOpen && <p>{question.info}</p>}
    </section>
  )
}

export default Question
