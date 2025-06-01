import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskService {

    getTasks() {
        return ['Task 1', 'Task 2', 'Task 3']
    }

    createTask() {
        return 'Creando tareas'
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


