import { Background, ChatContacts, ChatContainer, ChatInput, ChatInputArea, ChatItem, ChatMessages, ChatMessagesArea, ChatOptions, JoinButton, LastMessage, LoginContainer, LoginContent, Main, ProfileImg, SendMessage, TitleChatContainer, TitleMessage, UserNameInput } from "./App-style";
import profileImage from './assets/profile-img.jpg'
import sendIcon from './assets/send.png'
import socket from 'socket.io-client'
import { useEffect, useState } from "react";

const io = socket('http://localhost:4000');

function App() {

  const [userName, setUserName] = useState('')
  const [joined, setJoined] = useState(false)
  const [users, setUsers] = useState([])

  useEffect(() => {
    io.on("users", (users) => {
      setUsers(users)
    })
  }, [])

  const handleJoin = () => {
    if(userName) {
      io.emit("join", userName);
      setJoined(true)
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
              <>
              {user.userName}{index + 1 < users.length && users.length !== 0? ', ' : ''}
              
              </>
             ))}
            </LastMessage>
          </TitleChatContainer>
        </ChatItem>
        </ChatOptions>

        <ChatMessagesArea>

        </ChatMessagesArea>

        <ChatInputArea>
          <ChatInput placeholder="Mensagem"/>
          <SendMessage alt="Ícone enviar" src={sendIcon}/>
        </ChatInputArea>

      </ChatMessages>

    </ChatContainer>
   </Main>
  );
}

export default App;
