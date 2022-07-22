import React, {useState, useEffect} from 'react'

const Clock = () => {
  const [clockState, setClockState] = useState()

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <>
    <div 
      style={{
        fontSize:"35px", 
        margin: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        The time is currently:
    </div>

    <div
      style={{
        fontSize:"55px", 
        fontFamily: "sans-serif",
        margin: "60px", 
        backgroundColor:"#00FF00", 
        display: "flex",
        alignItems:"center",
        justifyContent: "center"
      }}>
        {clockState}
    </div>
    </>
  )
}

export default Clock;

