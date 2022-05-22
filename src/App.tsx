import React, { useState } from 'react'
import './App.css'
type Event = React.DragEvent<HTMLDivElement>
interface Card {
  id: number
  order: number
  text: string
}
const App = () => {
  const [cardList, setCardList] = useState<Card[]>([
    { id: 1, order: 3, text: 'КАРТОЧКА 3' },
    { id: 2, order: 1, text: 'КАРТОЧКА 1' },
    { id: 3, order: 2, text: 'КАРТОЧКА 2' },
    { id: 4, order: 4, text: 'КАРТОЧКА 4' },
  ])

  const dragStartHandler = (e: Event, card: Card) => {}

  const dragEndHandler = (e: Event, card?: Card) => {}

  const dragOverHandler = (e: Event) => {}

  const dropHandler = (e: Event, card: Card) => {}

  return (
    <div className="app">
      {cardList.map((card) => (
        <div
          onDragStart={(e) => dragStartHandler(e, card)}
          onDragLeave={(e) => dragEndHandler(e, card)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropHandler(e, card)}
          draggable={true}
          className="card"
        >
          {card.text}
        </div>
      ))}
    </div>
  )
}

export default App
