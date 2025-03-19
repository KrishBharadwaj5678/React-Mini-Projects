import { useState } from 'react'

function App() {

  let [background,setBackground] = useState("#151515");
  
  let generateColor =() => {
    let randomRed = Math.floor(Math.random() * 256);
    let randomGreen = Math.floor(Math.random() * 256);
    let randomBlue = Math.floor(Math.random() * 256);

    let finalColor = `#${randomRed.toString(16).padStart(2,'0')}${randomGreen.toString(16).padStart(2,'0')}${randomBlue.toString(16).padStart(2,'0')}`;

    setBackground(finalColor);
  }

  return (
    <>
    <div className={`w-full h-screen flex justify-center items-end bg-[${background}]`}>

        <button 
          className='bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-full mb-5 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:from-blue-600 hover:to-indigo-700 md:w-60 md:h-20 md:rounded-md md:text-2xl md:mb-7 lg:w-52 lg:text-xl lg:h-16 lg:rounded-full'
          onClick={generateColor}
        >
         Change the Mood
       </button>
       
    </div>
    
    </>
  )
}

export default App
