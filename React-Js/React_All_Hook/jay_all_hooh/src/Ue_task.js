import React, { useEffect, useMemo, useState } from 'react'; 

export default function Ue_task() {
  const [add , setAdd] = useState(0)
 const [pluse , setPluse] = useState(0);
 const [button, setButton] = useState({ number:'', name: '' });

 useEffect(()=>{
  if(add!=0)
  {
    setPluse(pluse+5)
  }
  
},[add])
// new use effact task/

  const Click = ( number, name ) => {
    setButton({ number, name });
    alert(`your data is ${name}...
            clicked button ${number}...`);
  };
  useEffect(() => {
    console.log(button);
  }, [button]);               

  return (
    <>
    { /* new use effact task  */}
    <h1>task</h1><br/>
    <h1>{add}</h1>
    <button onClick={()=>setAdd(add+1)}>add</button><br/>
    <button onClick={()=>setAdd(add-1)}>sub</button><br/><br/>
    
    <h1>{pluse}</h1>
    
            <button onClick={() => Click(1 , 'SAVE')}>Button Save </button>
            <button onClick={() => Click(2 , 'DELETE')}>Button Delete</button>
            <button onClick={() => Click(3 , 'UPDATE')}>Button Update</button>
    
    </>
  )
}

