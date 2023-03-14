'use client'

import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../lib/firebase";
import Message from "./Message";

type Props = {
    chatID: string
}

function Chat({ chatID }: Props) {
  const { data: session } = useSession();

  const [messages] = useCollection(session && query(
    collection(db, 'users', session?.user?.email!, 'chats', chatID, 'messages'),
    orderBy('createdAt', 'asc')
  ))

  return (
    <div className="flex-1">
      {messages?.docs.map((message) => (
        <Message key={message.id} message={message.data()}/>
      ))}
    </div>
  )
}

export default Chat
