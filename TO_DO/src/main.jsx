import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Todo from './todo'
import Reminder from './Reminder'
// import App from './App.jsx'
import StudentForm from './StudentForm.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Todo/> */}
    {/* <Reminder/> */}
    <StudentForm/>

  </StrictMode>,
)
