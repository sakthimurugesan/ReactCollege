import {useRef} from 'react'
function App()
{
  const emailRef=useRef();
  const nameRef=useRef();
  const messageRef=useRef();
  const handleSubmit=(e)=>
  {
    e.preventDefault();
      console.log(emailRef.current.value);
      console.log(nameRef.current.value);
      console.log(messageRef.current.value);
  }
  return(
    <>
    <form onSubmit={handleSubmit}>
      <input type='email' placeholder='email' ref={emailRef}></input><br></br>
      <input type='text' placeholder='name' ref={nameRef}></input><br></br>
      <textarea ref={messageRef}></textarea><br></br>
      <button type='submit'>Submit</button>
      <></>
    </form>
    </>
  )
}
export default App;