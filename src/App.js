import { Background, ChatContacts, ChatContainer, ChatInput, ChatInputArea, ChatItem, ChatMessages, ChatMessagesArea, ChatOptions, LastMessage, Main, ProfileImg, SendMessage, TitleChatContainer, TitleMessage } from "./App-style";
import profileImage from './assets/profile-img.jpg'
import sendIcon from './assets/send.png'
import socket from 'socket.io-client'
import { useEffect } from "react";

const io = socket('http://localhost:4000');

function App() {

  useEffect(() => {
    io.emit('join', 'Um usuário entrou')
  }, [])

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
            <LastMessage>Lucas, Paulo, Você </LastMessage>
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
