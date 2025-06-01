import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { TaskService } from "./tasks.service";

@Controller('/tasks')
export class TaskController {

  constructor(private tasksService: TaskService) { }

  @Get()
  getAllTasks() {
    return this.tasksService.getTasks();
  }

  @Post()
  createTasks() {
    return this.tasksService.createTask();
  }

  @Put()
  updateTask() {
        return this.tasksService.updateTask();
  }

  @Delete()
  deleteTask() {
        return this.tasksService.deleteTask();
  }

  @Patch()
  updateTaskStatus() {
       return this.tasksService.updateTaskStatus();
  }





}