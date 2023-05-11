import { styled } from "styled-components";

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