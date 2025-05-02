import { useState } from "react";

type AddTaskProps = {
  onAddTaskSubmit: (title: string, description: string) => void;
};

export const AddTask = ({ onAddTaskSubmit }: AddTaskProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="bg-slate-200 space-y-4 p-6 rounded-md shadow flex flex-col gap-5">
      <input
        className="bg-white p-3 rounded-md"
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="bg-white p-3 rounded-md h-28"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        onClick={() => {
               onAddTaskSubmit(title, description);
               setTitle("");
               setDescription("");
               }}
        className="bg-slate-400 p-3 rounded-md text-white font-bold"
      >
        Adicionar
      </button>
    </div>
  );
};
