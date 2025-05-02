import { ChevronRight, Trash2 } from 'lucide-react';

type Task = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
};

type TasksProps = {
  tasks: Task[];
  onTasksClick: (taskId: number) => void;
  onDeleteClick: (taskId: number) => void;
};

export const Tasks = ({ tasks, onTasksClick, onDeleteClick }: TasksProps) => {
  return (
    <ul className="space-y-4 bg-slate-200 rounded-md shadow p-5">
      {tasks.map((task) => (
        <li key={task.id} className="flex flex-row gap-3">
          <button
            onClick={() => onTasksClick(task.id)}
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md transition-all cursor-pointer ${
              task.isCompleted ? 'line-through italic' : ''
            }`}
          >
            {task.title}
          </button>

          <button className="bg-slate-400 text-white cursor-pointer p-3 rounded-md">
            <ChevronRight />
          </button>

          <button
            onClick={() => onDeleteClick(task.id)}
            className="bg-slate-400 text-white cursor-pointer p-3 rounded-md"
          >
            <Trash2 />
          </button>
        </li>
      ))}
    </ul>
  );
};
