interface Task {
  id: string;
  title: string;
  description: string;
  status: "pending" | "completed";
}

class TaskManager {
  private tasks: Task[] = [];

  public addTask(task: Task) {
    this.tasks.push(task);
  }

  public completeTask(taskId: string) {
    for (let task of this.tasks) {
      if (task.id == taskId) {
        task.status = "completed";
      }
    }
  }

  public deleteTask(taskId: string) {
    let newTasks: Task[] = [];
    // for (let task of this.tasks) {
    //   if (task.id != taskId) {
    //     newTasks.push(task);
    //   }
    // }
    newTasks = this.tasks.filter((task) => task.id != taskId);
    return newTasks;
  }

  public getPendingTasks() {
    let taskPending: Task[] = [];
    // for (let task of this.tasks) {
    //   if (task.status == "pending") {
    //     taskPending.push(task);
    //   }
    // }
    taskPending = this.tasks.filter((task) => task.status == "pending");
    return taskPending;
  }

  public findTaskByid(taskId: string) {
    let findTask: Task | undefined = undefined;
    // for (let currentTask of this.tasks) {
    //   if (currentTask.id == taskId) {
    //     findTask = currentTask;
    //   }
    // }
    findTask = this.tasks.find((task) => task.id == taskId);

    if (findTask) {
      return findTask;
    } else {
      throw new Error("task does not exist");
    }
  }

  public displayTaskDetailsById(id: string) {
    // for (let idTask of this.tasks) {
    //   if (idTask.id == id) {
    //     console.log(
    //       "id:" +
    //         idTask.id +
    //         "title:" +
    //         idTask.title +
    //         "description:" +
    //         idTask.description +
    //         "status:" +
    //         idTask.status
    //     );
    //   }
    // }
    try {
      let task = this.findTaskByid(id);
      console.log(task);
    } catch (error) {
      console.log("task tsy hita");
      //error.message azo alaina 
    }
  }
  public updateTaskByid(taskId: string, title: string) {
    for (let task of this.tasks) {
      if (task.id == taskId) {
        task.title = title;
      }
    }
  }
}
