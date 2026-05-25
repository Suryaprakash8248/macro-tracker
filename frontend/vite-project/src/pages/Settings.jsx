import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

function Settings() {
  const navigate = useNavigate();
  const [darkmode, setDarkmode] = useState(false);
  
  function handleLogOut() {
      if(window.confirm("Are you sure to logout?")) {
        navigate("/");
        toast.success("logged out successfully")
      }
    };

     const toggleTheme = ()=> {
    document.documentElement.classList.toggle("dark");

    if(document.documentElement.classList.contains("dark")) {
      localStorage.theme = "dark"
    } else {
      localStorage.theme = "light"
    }
  };

   useEffect(()=> {
    if(localStorage.theme === "dark") {
      document.documentElement.classList.add('dark');
    }
  },[])

  return (
    <div>
      <div className='flex mt-2 items-center justify-around ml-[-15px] '>
        <div className='flex items-center '>
          <img className='w-20 rounded-full' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAb1BMVEX///8AAABERETu7u6amprd3d37+/v4+PhlZWW8vLxqamrk5OSMjIwgICA9PT3x8fG0tLRvb2/V1dVNTU2UlJQzMzMoKCjPz8/IyMjBwcGHh4eoqKiYmJgaGhouLi4NDQ1/f39UVFR2dnatra0TExMU/KpIAAAC90lEQVR4nO3ca3vaIBiAYdB4SBq1VqeubrXq/v9v3IJztvJiyMyh4HN/87oghbckIZyUAgAAAAAAAAAAAAAAAAAAAAAAAABEL5/2rs26LlPLht+0ZdN1oVr2ZIdAv3ZdqJZthRisui5Uy8ZCDHS/61K1SwqBfu66VE1LP/5YizEYf0wyGLRbvhZkure+/PohxuDnJcEs1zq2IGRFHefnHsDLmxgDnQz/Jjjuip9PXZW2EedH4PJPJfuJHAAjKxrL+hyimFpC9q+Oq/T9RgQKi3R++RFPEMQXoZ9Yboc7QhBLS8jKKxp7EO5qBYXwb4c7W0EMLaGGEITeEu6+EU5Cbgm1tIKwg1DWHapg1HVd/temthCMy//YV1XT4yDop6I0anixytPTfT7bbPc3U+Yd1+MuubNak+Xn/+0odYdhN3RcPggjV7W2wkPuZeFIfGy/4HV6Fit1cDzm019S6l67Ra6f9L/97kw9k5KvnckDsbeqtLvZ4TnYMQi3g3RiDyBPSmYRXq0cWTtFbYzdWy591c+tLGHPvcys+nhMrE6v8yTNF7RB1rTi0iOT1bOaNF7O5ow21/MIftOqVuSSMPvKw0HSs24E3yUG9uKE3Xsa2qfjcS72dhae2VMps97nITWHvlgHrdPyrMZwJef3eZp8FY4YTLybs+NbK6QXhCMGB+8LDKKNgfs7wRJtDCosvpNHYyOIQYUryPPz4cdgWuEK8rhD+DGoMjgsL1gKPwb+rwXXi4EYxBAD7gWeiUaFK8T6bqSPpOkrF/hm0nrlPW+4jDYG/jdDBGMozYylLYIaS1OuMVXPqcMoxlRP6htbD3nKkTkW5toM5lyZezf2VpUebg2GuBbHPd0U5Voc1mSxNk+xRlOVrdV9e4i1uqzZZu2+Yg+HwV4exZ4ug719ij2eBnt9FXu+Dfb+K86AMDgLRHEmjMHZQIozogzOCrsmxiD6M+M+4+xAzpAscJYoZ8oanC0MAAAAAAAAAAAAAAAAAAAAAAAAAA/pN1sWJOrLN+VLAAAAAElFTkSuQmCC" alt="" />
         <p className='font-bold text-2xl ml-[-15px]'>Settings</p>
        </div>
        <div>
        <a href="/homepage" className='font-bold  bg-black text-white px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-4 rounded-lg hover:opacity-50'>Back</a>
      </div>
      </div>

      

      <div className='font-bold text-xl md:text-2xl lg:text-4xl'>
          <div className='my-5 px-2 py-2 border-solid border-4 border-black md:text-center hover:bg-gray-700 hover:text-white'>
          Account Details
        </div>
        <div className='my-5 px-2 py-2 border-solid border-4 border-black md:text-center hover:bg-gray-700 hover:text-white flex justify-around'>
          Theme
           <button onClick={()=>toggleTheme()} className={`w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-300
              ${darkmode ? "bg-green-500" : "bg-gray-400"}`}
            >
            <div
            className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300
            ${darkmode ? "translate-x-8" : "translate-x-0"}`}
          />
            </button>
        </div>

        <div onClick={handleLogOut}  className='my-5 px-2 py-2 border-solid border-4 border-black md:text-center hover:bg-gray-700 hover:text-white'>
          LogOut
        </div>
      </div>
        
    </div>
  )
}

export default Settings;