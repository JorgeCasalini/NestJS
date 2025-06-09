import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { findAllParameters, TaskDto } from './task.dto';

@Injectable()
export class TaskService {
  private tasks: TaskDto[] = [];

  create(task: TaskDto) {
    this.tasks.push(task);
    console.log(this.tasks);
  }

  findById(id: string): TaskDto {
    const foundTask = this.tasks.filter((t) => t.id === id);

    if (foundTask.length) return foundTask[0];

    throw new HttpException(
      `Task with id ${id} not found`,
      HttpStatus.NOT_FOUND,
    );
  }

  findAll(params: findAllParameters): TaskDto[] {
    return this.tasks.filter((t) => {
      let match = true;

      if (params.title !== undefined && !t.title.includes(params.title)) {
        match = false;
      }

      if (params.status !== undefined && !t.status.includes(params.status)) {
        match = false;
      }

      return match;
    });
  }

  update(task: TaskDto) {
    const taskIndex = this.tasks.findIndex((t) => t.id === task.id);

    if (taskIndex >= 0) return (this.tasks[taskIndex] = task);

    throw new HttpException(
      `Task woth id ${task.id} ot found`,
      HttpStatus.BAD_REQUEST,
    );
  }

  delete(id: string) {
    const newTask = this.tasks.filter((task) => task.id !== id);

    if (newTask) return newTask;

    throw new HttpException(
      `Task with id ${id} not found`,
      HttpStatus.BAD_REQUEST,
    );
  }
}
