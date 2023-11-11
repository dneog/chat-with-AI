import { useChat } from 'ai/react';
 import "./style.css"


export default function IndexPopup() {
  const { messages, input, handleInputChange, handleSubmit,  isLoading, stop } = useChat({
    api: 'http://localhost:3000/api/chat'
    
  });

  const closePopup = () => {
    // Get the current window
    const currentWindow = chrome.extension.getViews({ type: 'popup' })[0];
  
    // Check if the window exists and is a valid popup
    if (currentWindow) {
      // Close the popup
      currentWindow.close();
    }
  };
 
  return (
    <div className='de'>
         <div className=" w-[500px] h-[500px] px-3">
          <div className='h-[40px]'>
          <button className='float-right' onClick={closePopup}>
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
          </button>
          </div>


          <div className='h-[382px] border border-gray-400 rounded-md p-2 mb-3 overflow-y-scroll'>

            
          {messages.length==0 ? 
          <div className='flex justify-center flex-col items-center'>
            <h2 className='text-[40px] mt-[115px] text-gray-700 font-bold'>CHAT WITH AI</h2>
            <p className='text-[20px] text-gray-600'> AI-powered chrome extension</p>
          </div> : messages.map(m => (
        <div key={m.id}>


          <p className='text-[16px] font-semibold'>{m.role === 'user' ? 'User ' : 'AI'}</p>
          <p className='text-[15px]'>
          {m.content}
          </p>
          
        </div>
      ))}
         </div>
        
     
 
      <form onSubmit={handleSubmit} className='flex flex-row'>
        
         <div className='flex flex-row'>
         <input
            className="w-[350px] border border-gray-400 rounded mb-2 outline-none shadow-xl p-[5px] px-[6px] font-medium text-[16px]"
            value={input}
            onChange={handleInputChange}
            placeholder='Ask Something'
          />
          <button type='submit' disabled={isLoading} className='border border-gray-400 rounded mb-2 shadow-xl py-2 px-6 font-medium text-[16px] ml-2'>{isLoading ? <div className='pageLoading'></div> : 'Generate'}</button>
          
         </div>
          
        
      </form>
    </div>
    </div>
   
  );
}