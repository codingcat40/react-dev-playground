import CounterProject from './pages/CounterProject';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Todo from './pages/Todo';
import FetchAPI from './pages/FetchAPI';

function App() {


  return (
    <div className='flex flex-col gap-12'>
        <nav className='flex flex-row items-center justify-end gap-8 bg-pink-200 p-2'>
            <Link className='bg-black text-white font-light p-2 rounded-2xl' to='/counter-project'>Counter Project</Link>
            <Link className='bg-black text-white font-light p-2 rounded-2xl' to='/todo-list'>TODO</Link>
            <Link className='bg-black text-white font-light p-2 rounded-2xl' to='/api-project'>API Data</Link>
        </nav>



    <Routes>
      <Route path='/counter-project' element={<CounterProject />}></Route>
      <Route path='/todo-list' element={<Todo />}></Route>
      <Route path='/api-project' element={<FetchAPI />}></Route>
    </Routes>

    
    </div>
  )
}

export default App
