import { ChevronRight, DeleteIcon, Trash2Icon } from 'lucide-react';
export const Tasks = (props: any) =>{
   return(
      <ul className="space-y-4 bg-slate-200 rounded-md shadow p-5"> 
      {props.tasks.map((task: any) => 
         <li key={task.id} className="flex flex-row gap-3">
         <button 
         onClick={ () => props.onTasksClick(task.id)} 
         className={`bg-slate-400 text-left w-full text-white p-2 rounded-md transition-all cursor-pointer ${task.isCompleted ? "line-through italic" : ""}`}>
            {task.title} 

         </button>
         <button className="bg-slate-400 text-white cursor-pointer p-3 rounded-md ">
            <ChevronRight />
         </button>
         <button  onClick={ () => props.onDeleteClick(task.id)}  className="bg-slate-400 text-white cursor-pointer p-3 rounded-md ">
            <Trash2Icon />
         </button>
         </li>
      )}
      </ul>
   )
}