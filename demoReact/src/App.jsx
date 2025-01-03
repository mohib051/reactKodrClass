import { useState } from "react" 

const App = () => {
  const [name, setname] = useState("")
  const [position , setposition] = useState("")
  const [allUsers , setallUsers] = useState([{name:"kazi", position:"developer"},{name:"mohib", position:"coder"} , {name:"honey singh", position:"singer"}])
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(name)
    
    const newArr =[...allUsers,{name , position}]
    setallUsers(newArr)
    setname("")
    setposition("")
    console.log(newArr)
  }
  return (
    <div>
        <form onSubmit={handleSubmit}
           className=' w-[50%] h-[50%] bg-cyan-300 p-3 gap-3 flex flex-col' >
          <input 
          value={name}
          onChange={(e)=>{setname(e.target.value)}}
          type="text" name="" id=""  placeholder='enter your name'/>

          <input 
          value={position}
          onChange={(e)=>setposition(e.target.value)}
          type="text" placeholder="enter position " />
          
          <input type="submit"  className='bg-green-500 text-white'/>
        </form>
       
        <div id="show" className=" bg-blue-300 w-full h-auto">
            {allUsers.map((item,index)=>{
                return (
                  <>
                  <div id="div" className=" flex justify-between p-2">
                  <h1 key={index}>{item.name}</h1>
                  <h2>{item.position}</h2>
                  </div>
                
                  </> 
                )
            })}
            
        </div>
    </div>
  )
}

export default App
