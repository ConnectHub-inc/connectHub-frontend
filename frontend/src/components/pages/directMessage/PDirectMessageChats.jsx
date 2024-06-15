import CListChatCard from '../../parts/chatCard/CListChatCard'

export default function PDirectMessageChats({chats}) {
  return (
    <section className="p-directMessage-chats">
      <CListChatCard chats={chats} />
    </section>
  )
}