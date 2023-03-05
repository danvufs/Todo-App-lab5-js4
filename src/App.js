import { useState } from 'react';
import uuid from 'react-uuid';
import Header from './components/Header/Header';
import Tasks from './components/Tasks/Tasks';
import Form from './components/Form/Form';
import Help from './components/Help/Help';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      description: 'Walk the dog',
      done: true
    },
    {
      id: uuid(),
      description: 'Wash the car',
      done: false
    },
    {
      id: uuid(),
      description: 'Finish the lab',
      done: false
    }
  ]);

  const handleClearTasks = () => {
    setTasks([]);
  }

  const handleStatusChange = (id) => {
    const updatedTasks = [...tasks];
    updatedTasks.forEach((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
    });
    setTasks(updatedTasks);
  }

  const handleTaskRemove = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  const handleAddTask = (description, status) => {
    setTasks([
      ...tasks,
      {
        id: uuid(),
        description: description,
        done: status
      }
    ]);
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Tasks tasks={tasks} onStatusChange={handleStatusChange} onTaskRemove={handleTaskRemove} onClearTasks={handleClearTasks} />} />
        <Route path="/add" element={<Form onAddTask={handleAddTask} />} />
        <Route path="/help" element={<Help />} >
          <Route path="add" element={<AddHelp />} />
          <Route path="remove" element={<RemoveHelp />} />
          <Route path="change" element={<ChangeHelp />} />
          <Route path="" element={<DefaultHelp />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function AddHelp() {
  return (
    <main>
      {/* <h1>Add Task Help</h1>
      <p>
        To add a new task, fill out the form at the bottom of the Tasks page with a description of the task and whether it is completed or not. Click the "Add Task" button to add the task to the list.
      </p> */}
    </main>
  );
}

function RemoveHelp() {
  return (
    <main>
      {/* <h1>Remove Task Help</h1>
      <p>
        To remove a task
</p> */}
</main>
);
}

function ChangeHelp() {
return (
<main>
{/* <h1>Change Task Status Help</h1>
<p>
To change the status of a task
</p> */}
</main>
);
}

function DefaultHelp() {
return (
<main>
{/* <h1>Help</h1>
<p>
This app will help you to keep track of your tasks.
</p> */}
</main>
);
}

export default App;