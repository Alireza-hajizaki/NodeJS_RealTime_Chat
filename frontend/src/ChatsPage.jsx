//first way with chat-pretty
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{height: '100vh'}}>
        <PrettyChatWindow
        projectId="400ae66e-2a3e-4370-970e-0e5967608c29"
        username={props.user.username}
        secret={props.user.username}
        style={{height: '100%'}}
        />
    </div>
  )
}

export default ChatsPage


// second way with chat-advanced
// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from "react-chat-engine-advanced";

// const ChatsPage = (props) => {

//     const chatProps = useMultiChatLogic('400ae66e-2a3e-4370-970e-0e5967608c29', props.user.username, props.user.secret);

//   return (
//     <div style={{height: '100vh'}}>
//         <MultiChatSocket {...chatProps}/>
//         <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
//     </div>
//   )
// }

// export default ChatsPage

