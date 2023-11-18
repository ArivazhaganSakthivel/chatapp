import React from 'react'
import {
  ChatEngine,
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';

function Chatpage(props) {
  const chatProps = useMultiChatLogic(
    'b6c17520-0712-4e65-83c5-dfaecc377174',
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{height: '100vh'}}>

      <MultiChatWindow {...chatProps} />
      <MultiChatSocket {...chatProps} />

    </div>

  )
}

export default Chatpage


// import { PrettyChatWindow } from 'react-chat-engine-pretty';
{/* <PrettyChatWindow
      projectId="b6c17520-0712-4e65-83c5-dfaecc377174"
      username= {props.user.username}
      secret={props.user.secret}
      style={{ height: '100%' }}
    /> */}