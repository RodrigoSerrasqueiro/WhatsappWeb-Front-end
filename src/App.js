import { Background, ChatContacts, ChatContainer, ChatInput, ChatInputArea, ChatItem, ChatMessages, ChatMessagesArea, ChatOptions, JoinButton, LastMessage, LoginContainer, LoginContent, Main, Message, MessageContainer, ProfileImg, SendMessage, TitleChatContainer, TitleMessage, UserNameInput } from "./App-style";
import profileImage from './assets/profile-img.jpg'
import sendIcon from './assets/send.png'
import socket from 'socket.io-client'
import { useEffect, useState } from "react";

const io = socket('http://localhost:4000');

function App() {

  const [userName, setUserName] = useState('');
  const [joined, setJoined] = useState(false);
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [myID, setMyID] = useState('');

  useEffect(() => {
    io.on("users", (users) => {
      setUsers(users);
    })
    io.on("message", (message) => setMessages((messages) => [...messages, message]));
    io.on("connect", () => setMyID(io.id))
  }, [])

  const handleJoin = () => {
    if(userName) {
      io.emit("join", userName);
      setJoined(true);
    }
  }

  const handleMessage = () => {
    if(message) {
      io.emit("message", {message, userName});
      setMessage('');
    }
  }

  if(!joined) {
    return (
      <LoginContainer>
        <LoginContent>
          <UserNameInput 
            placeholder="Digite o seu nome"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <JoinButton onClick={handleJoin}>Entrar</JoinButton>
        </LoginContent>
      </LoginContainer>
    )
  }

  return (
   <Main>
    <Background></Background>
    <ChatContainer>

      <ChatContacts>
        <ChatOptions></ChatOptions>
        <ChatItem>
          <ProfileImg alt="Imagem de perfil" src={profileImage} />
          <TitleChatContainer>
            <TitleMessage>NetWorking Profissão Programador</TitleMessage>
            <LastMessage>Paulo: Bom dia!</LastMessage>
          </TitleChatContainer>
        </ChatItem>
      </ChatContacts>

      <ChatMessages>
        <ChatOptions>
        <ChatItem>
          <ProfileImg alt="Imagem de perfil" src={profileImage} />
          <TitleChatContainer>
            <TitleMessage>NetWorking Profissão Programador</TitleMessage>
            <LastMessage>
             {users.map((user, index) => (
              <span key={index}> 
              {user.userName}{index + 1 < users.length && users.length !== 0? ', ' : ''}
              
              </span>
             ))}
            </LastMessage>
          </TitleChatContainer>
        </ChatItem>
        </ChatOptions>

        <ChatMessagesArea>
          {messages.map((message, index) => (
            <MessageContainer
            key={index}
            myMessage={message.userID === myID}
            >
              <Message 
                myMessage={message.userID === myID}
              >
                {message.userName? `${message.userName}: ` : ''} {message.message}
              </Message>
            </MessageContainer>
          ))}
        </ChatMessagesArea>

        <ChatInputArea>
          <ChatInput 
            placeholder="Mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <SendMessage alt="Ícone enviar" src={sendIcon} onClick={() => handleMessage()}/>
        </ChatInputArea>

      </ChatMessages>

    </ChatContainer>
   </Main>
  );
}

export default App;
