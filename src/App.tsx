import { useState } from 'react'
import { AddTask} from './components/AddTask'
import { Tasks} from './components/Tasks'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    {
      id:1,
      title: "Estudar programação",
      description: "Estudar toda a matéria da faculdade",
      isCompleted: false,
    },
     {
      id:2,
      title: "Estudar programação",
      description: "Estudar toda a matéria da faculdade",
      isCompleted: false,
    }
  ])

function onTaskClick(taskId: number) {
  const newTasks = tasks.map(task => {
    if (task.id === taskId) {
      return { ...task, isCompleted: !task.isCompleted };
    } else {
      return task;
    }
  });
  setTasks(newTasks);
}

function onAddTaskSubmit(title: string, description: string ) {
  if(title.trim() == "" || description.trim() == ""){
    alert("Por favor, preencha todos os campos.")
    return
  } 
  const newTask ={
    id: tasks.length + 1,
    title: title,
    description: description,
    isCompleted: false
  };
  setTasks([...tasks, newTask])
}

function onDeleteClick(taskId: number) {
  const newTasks = tasks.filter(task => task.id !== taskId);
  setTasks(newTasks);
}



  return (
    <div className="w-screen h-screen bg-slate-400 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
         <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
    <Tasks tasks={tasks} onTasksClick={onTaskClick} onDeleteClick={onDeleteClick}/>
      </div>
   
    </div>
  )
}

export default App
