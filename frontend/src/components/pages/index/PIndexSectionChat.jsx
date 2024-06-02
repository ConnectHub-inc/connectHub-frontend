import CChatListCard from "../../parts/chat/card/CChatListCard"

function PIndexSectionChat() {
  const list = [
    {
      id: 1,
      name: 'Alice',
      time: '21:57',
      message: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'
    },
    {
      id: 2,
      name: 'Bob',
      time: '22:00',
      message: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'
    },
  ]

  return (
    <section>
      <CChatListCard list={list} />
    </section>
  )
}

export default PIndexSectionChat