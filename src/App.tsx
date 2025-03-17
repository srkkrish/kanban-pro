import { useState, useRef, useEffect } from 'react';

import './App.css';
import task from './assets/task.png';
import kanban from './assets/kanban.png';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import Font Awesome icons

function App() {
  const [tasks, setTasks] = useState<any>({ todo: [], inprogress: [], done: [] }); // States for managing tasks data

  const [draggedTask, setDraggedTask] = useState<any>(null);
  const [isEditing, setIsEditing] = useState<any>({}); // Track editing state for each task

  // Utility function to update localStorage with the tasks state
  const updateLocalStorage = (tasks: any) => {
    localStorage.setItem('kanbanTasks', JSON.stringify(tasks));
  };

  // Function to populate tasks from localStorage on page refresh
  const loadTasksFromLocalStorage = () => {
    const storedTasks = localStorage.getItem('kanbanTasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  };

  useEffect(() => {
    loadTasksFromLocalStorage(); // Load tasks when the component mounts
  }, []);

  const handleDragStart = (event: any, task: any, fromList: any) => {
    setDraggedTask({ task, fromList });
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', JSON.stringify({ task, fromList }));
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (event: any, toList: any) => {
    event.preventDefault();
    if (!draggedTask) return;
    const updatedTasks: any = { ...tasks };
    const { task, fromList } = draggedTask;
    updatedTasks[fromList] = updatedTasks[fromList].filter((t: any) => t.task !== task['task']);
    updatedTasks[toList] = [...updatedTasks[toList], task];
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks); // Update localStorage after drop
    setDraggedTask(null);
  };

  const AddTask = (param: any, newTask: any) => {
    if (!newTask.trim()) return;
    const currentDate = new Date().toLocaleString();
    const taskObject = { task: newTask, date: currentDate };
    setTasks((prevTasks: any) => {
      const updatedTasks = { ...prevTasks, [param]: [...prevTasks[param], taskObject] };
      updateLocalStorage(updatedTasks); // Update localStorage after adding task
      return updatedTasks;
    });
  };

  const handleDelete = (task: any, list: any) => {
    const updatedTasks: any = { ...tasks };
    updatedTasks[list] = updatedTasks[list].filter((t: any) => t.task !== task.task);
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks); // Update localStorage after deleting task
  };

  const handleEdit = (task: any, _list: any) => {
    setIsEditing((prev: any) => ({ ...prev, [task.task]: true }));
  };

  const handleSaveEdit = (task: any, list: any, newTask: string) => {
    if (!newTask.trim()) return;
    const updatedTasks: any = { ...tasks };
    updatedTasks[list] = updatedTasks[list].map((t: any) =>
      t.task === task.task ? { ...t, task: newTask } : t
    );
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks); // Update localStorage after editing task
    setIsEditing((prev: any) => ({ ...prev, [task.task]: false }));
  };

  const inputRefs: any = {
    todo: useRef(null),
    inprogress: useRef(null),
    done: useRef(null),
  };

  const handleAddTaskClick = (param: any) => {
    const inputValue = inputRefs[param].current.value;
    AddTask(param, inputValue);
    inputRefs[param].current.value = ''; // Clear input after adding
  };

  return (
    <section className="kanban-pro">
      <h2 className="title">Kanban Board
        <img src={kanban} alt="Kanban" width={40} height={40} />
      </h2>

      <div className="container">
        {/* TO DO STAGE */}
        <div className="item todo" onDragOver={handleDragOver} onDrop={(event) => handleDrop(event, 'todo')}>
          <h2>To Do
            <div className='task-count'>{tasks.todo.length}</div>
          </h2>

          <div className="tasks-wrapper">
            {tasks.todo.map((task: any, index: number) => (
              <div key={index} draggable onDragStart={(event) => handleDragStart(event, task, 'todo')} className="task-item"
                style={{ borderLeft: '5px solid #f08080' }}>
                {isEditing[task.task] ? (
                  <div>
                    <input type="text" defaultValue={task.task} onBlur={(e) => handleSaveEdit(task, 'todo', e.target.value)}
                      autoFocus />
                  </div>
                ) : (
                  <>
                    <div className='task-data'>
                      <div className="task-details">{task.task}</div>
                      <div className="task-date">{task.date}</div>
                    </div>
                    <div className="task-actions">
                      <FaEdit title='Edit' onClick={() => handleEdit(task, 'todo')} />
                      <FaTrash title='Delete' onClick={() => handleDelete(task, 'todo')} />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="footer">
            <input type="text" placeholder="Add a new task" ref={inputRefs.todo} />
            <button className="add-task" onClick={() => handleAddTaskClick('todo')}>
              Add Task <img src={task} alt="Task" height={20} width={20} />
            </button>
          </div>
        </div>

        {/* IN PROGRESS STAGE */}
        <div className="item inprogress" onDragOver={handleDragOver} onDrop={(event) => handleDrop(event, 'inprogress')} >
          <h2>In Progress
            <div className='task-count'>{tasks.inprogress.length}</div>
          </h2>

          <div className="tasks-wrapper">
            {tasks.inprogress.map((task: any, index: number) => (
              <div key={index} draggable onDragStart={(event) => handleDragStart(event, task, 'inprogress')} className="task-item"
                style={{ borderLeft: '5px solid #ffd700' }}>
                {isEditing[task.task] ? (
                  <div>
                    <input type="text" defaultValue={task.task} onBlur={(e) => handleSaveEdit(task, 'inprogress', e.target.value)}
                      autoFocus />
                  </div>
                ) : (
                  <>
                    <div className='task-data'>
                      <div className="task-details">{task.task}</div>
                      <div className="task-date">{task.date}</div>
                    </div>
                    <div className="task-actions">
                      <FaEdit title='Edit' onClick={() => handleEdit(task, 'inprogress')} />
                      <FaTrash title='Delete' onClick={() => handleDelete(task, 'inprogress')} />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="footer">
            <input type="text" placeholder="Add a new task" ref={inputRefs.inprogress} />
            <button className="add-task" onClick={() => handleAddTaskClick('inprogress')}>
              Add Task <img src={task} alt="Task" height={20} width={20} />
            </button>
          </div>
        </div>

        {/* DONE STAGE */}
        <div className="item done" onDragOver={handleDragOver} onDrop={(event) => handleDrop(event, 'done')} >
          <h2>Done
            <div className='task-count'>{tasks.done.length}</div>
          </h2>

          <div className="tasks-wrapper">
            {tasks.done.map((task: any, index: number) => (
              <div key={index} draggable onDragStart={(event) => handleDragStart(event, task, 'done')} className="task-item"
                style={{ borderLeft: '5px solid #90ee90' }}>
                {isEditing[task.task] ? (
                  <div>
                    <input type="text" defaultValue={task.task} onBlur={(e) => handleSaveEdit(task, 'done', e.target.value)}
                      autoFocus />
                  </div>
                ) : (
                  <>
                    <div className='task-data'>
                      <div className="task-details">{task.task}</div>
                      <div className="task-date">{task.date}</div>
                    </div>
                    <div className="task-actions">
                      <FaEdit title='Edit' onClick={() => handleEdit(task, 'done')} />
                      <FaTrash title='Delete' onClick={() => handleDelete(task, 'done')} />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="footer">
            <input type="text" placeholder="Add a new task" ref={inputRefs.done} />
            <button className="add-task" onClick={() => handleAddTaskClick('done')}>
              Add Task <img src={task} alt="Task" height={20} width={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;