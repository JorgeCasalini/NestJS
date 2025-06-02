import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { TaskService } from "./tasks.service";

@Controller('/tasks')
export class TaskController {
  constructor(private tasksService: TaskService) {}

  @Get()
  getAllTasks(@Query() query: any) {
    console.log(query)
    return this.tasksService.getTasks();
  }

  @Get('/:id')
  getTasks(@Param('id') id: string) {
      return this.tasksService.getTask(parseInt(id))
  }

  @Post()
  createTasks(@Body() task: any) {
    return this.tasksService.createTask(task);
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