import { Background, ChatContacts, ChatContainer, ChatItem, ChatOptions, LastMessage, Main, ProfileImg, TitleChatContainer, TitleMessage } from "./App-style";
import profileImage from './assets/profile-img.jpg'


function App() {
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
    </ChatContainer>
   </Main>
  );
}

export default App;
