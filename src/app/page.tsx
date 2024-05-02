'use client'
import { useState } from "react";
import { useEffect } from "react";
import TaskForm from "../components/form"
import Tasklist from "../components/tasklist";
import { Task } from '../types/types'

export default function Home() {

const [tasks, setTasks] = useState<Task[]>([]);

function addEntry(entry: Task){
  setTasks([...tasks, entry]);
}

function deleteEntry(index: number){
    setTasks(tasks.filter((value, i) => i !== index))
  }

useEffect(()=>{
  console.log(tasks)
},[tasks])

  return (
    <main>
    <h1>Task Manager</h1>
      <TaskForm addEntry={addEntry}/> 
      <Tasklist entry={tasks} deleteEntry={deleteEntry}></Tasklist>
    </main>
  );
}

