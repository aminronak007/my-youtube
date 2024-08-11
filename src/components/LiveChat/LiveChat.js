import React, { useEffect, useState } from "react";
import ChatMessage from "../ChatMessages/ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../store/Chat/ChatSlice";
import { generateRandomName, makeid } from "../../helpers/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMessage({ name: "Ronak Amin", message: liveMessage }));
    setLiveMessage("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // API Polling
      console.log("Api Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeid(20) + "🚀",
        })
      );
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="ml-2 p-2 border border-black w-full h-[600px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {/* Disclaimer: Don't use indexes as keys */}
        {messages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full p-2 ml-2 border border-black"
      >
        <input
          className="w-96"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button type="submit" className="px-2 my-2 bg-green-100 rounded-sm">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
