import React, { useState } from 'react'

const Todo = () => {
  
    const [tasks, setTasks] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [taskId, setTaskId] = useState(null);


    const handleAddTask = (e) => {
        e.preventDefault();
        
        const newTask = {
            id: Date.now(),
            name: name,
            description: description,
            date: date,
        }
        if(taskId === null){
                setTasks([...tasks, newTask]);
        }
        else{
            setTasks(tasks.map((task) => (
                task.id === taskId ? newTask : task
            )))
            setTaskId(null);
        }

        
        setName("");
        setDescription("");
        setDate("");

    }


    // handle delete
    const handleDelete = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    }

    // handle edit
    const handleEdit = (task) => {
        setName(task.name);
        setDescription(task.description);
        setDate(task.date);
        setTaskId(task.id);
    }

  return (
    <div className='flex flex-row justify-around'>
        {/* enter a task details */}
        <div className='flex flex-col max-h-fit gap-6 border p-7 max-w-md rounded-2xl justify-start text-left'>
        
            <label className='flex flex-row gap-6'><strong>Task Name:</strong> <input type='text' value={name} className='border rounded-lg' onChange={e => setName(e.target.value)} required/></label>
            <label className='flex flex-row gap-6'><strong>Task Description:</strong> <textarea rows={2} value={description} type='text' className='border rounded-lg' onChange={e => setDescription(e.target.value)} required/></label>
            <label className='flex flex-row gap-6'><strong>Due Date:</strong> <input type="date" className='border rounded-lg' value={date} onChange={e => setDate(e.target.value)} required/></label>
            <button className='bg-black text-white rounded-3xl cursor-pointer hover:shadow-2xl shadow-blue-400' onClick={handleAddTask}>{taskId ? 'Update' : 'Add Task'}</button>
        </div>

        
        <div className='flex flex-col gap-8 justify-end max-w-120'>
                {
                    tasks && tasks.map((task) => (
                        <div key={task.id} className='flex flex-col gap-4 border p-12 font-sans rounded-2xl min-w-84'>
                            <div className='flex flex-row gap-6'>
                                <strong>Title: </strong>
                                <p className='line-clamp-1'>{task.name}</p>

                                {/* edit and delete */}
                                <span className='flex flex-row gap-3'>
                                    <button className='bg-blue-500 text-black px-4 py-2 rounded-2xl' onClick={() => handleEdit(task)}>Edit</button>
                                    <button className='bg-red-500 text-white px-4 py-2 rounded-2xl' onClick={() => handleDelete(task.id)}>Delete</button>
                                </span>
                            </div>

                            <div className='flex flex-row gap-6'>
                                <strong>Description: </strong>
                                <p className='line-clamp-2'>{task.description}</p>
                            </div>

                            <div className='flex flex-row gap-6'>
                                <strong>Due Date: </strong>
                                <p>{task.date}</p>
                            </div>
                    </div>
                    ))
                }
        </div>


    </div>
  )
}

export default Todo