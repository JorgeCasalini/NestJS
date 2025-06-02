import { Injectable, HttpCode, NotFoundException } from "@nestjs/common";

export interface User {
    name: string;
    age: number;
}

@Injectable()
export class TaskService {
    private tasks: any[] = [];

    getTasks() {
       return this.tasks;
    }

    getTask(id: number) {
       const taskFound = this.tasks.find(task => task.id === id);
       
       if(!taskFound) return new NotFoundException (`Task with ${id} not found`)
        
        return taskFound
    
    }

    createTask(task: any) {
        const newTask = {
            ...task,
            id: this.tasks.length + 1,
        }
        this.tasks.push(newTask);
        return newTask;
    }

    updateTask() {
        return 'actualizando tareas'
    }

    deleteTask() {
        return 'eliminando tarea'
    }

    updateTaskStatus() {
        return 'actualizando el estado de una tarea'
    }

}


