import { styled } from "styled-components";
import background from './assets/background.png'

export const Main = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.bgColor};
`;

export const Background = styled.div`
  background-color: ${({theme}) => theme.colors.mainColor};
  height: 20%;
  width: 100%;
  position: absolute;
  top: 0;
`;

export const ChatContainer = styled.div`
  width: 95%;
  max-width: 1800px;
  height: 95%;
  background-color: ${({theme}) => theme.colors.primary};
  position: absolute;
  display: flex;
`;

export const ChatContacts = styled.div`
  width: 30%;
  height: 100%;
  border-right: 1px solid ${({theme}) => theme.colors.borderColor1};
`;

export const ChatOptions = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({theme}) => theme.colors.tertiary};
`;

export const ChatItem = styled.div`
  box-sizing: border-box;
  padding: 10px;
  border-top: 1px solid ${({theme}) => theme.colors.borderColor2};
  border-bottom: 1px solid ${({theme}) => theme.colors.borderColor2};
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ProfileImg = styled.img`
  width: 60px;
  height: auto;
  border-radius: 50%;
`;

export const TitleChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

export const TitleMessage = styled.span`
  font-size: 18px;
`;

export const LastMessage = styled.span`
  color: ${({theme}) => theme.colors.secondary};
`;

export const ChatMessages = styled.div`
  flex: 1;
  background-image: url(${background});
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ChatMessagesArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px 30px 0 30px;
  max-height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8c8c8c;
    border-radius: 20px;
  }
`;

export const MessageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({myMessage}) => myMessage ? 'flex-end' : 'flex-start'};
`;

export const Message = styled.span`
  display: inline-block;
  max-width: 80%;
  padding: 8px;
  background-color: ${({ myMessage }) => (myMessage ? '#007bff' : '#f1f1f1')};
  color: ${({ myMessage }) => (myMessage ? '#fff' : '#333')};
  border-radius: 8px;
  margin-bottom: 5px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    border: 8px solid transparent;
    border-top-color: ${({ myMessage }) => (myMessage ? '#007bff' : '#f1f1f1')};
    z-index: 1;
  }

  ${({ myMessage }) =>
    myMessage
      ? `
    border-top-right-radius: 0;
    left: 0;
    &::before {
      left: 100%;
      border-left-width: 0;
    }
  `
      : `
    border-top-left-radius: 0;
    right: 0;
    &::before {
      right: 100%;
      border-right-width: 0;
    }
  `}
`;

export const ChatInputArea = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${({theme}) => theme.colors.borderColor2};
  box-sizing: border-box;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ChatInput = styled.input`
  width: 90%;
  background-color: ${({theme}) => theme.colors.primary};
  height: 45px;
  border: none;
  outline: none;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 4px;
  font-size: 16px;
`;

export const SendMessage = styled.img`
  width: 40px;
  height: auto;
  cursor: pointer;
`;

export const LoginContainer = styled.div`

`;

export const LoginContent = styled.div`

`;

export const UserNameInput = styled.input`

`;

export const JoinButton = styled.button`

`;