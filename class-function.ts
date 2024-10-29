class ClassFunction {
  private subscribers: (() => void)[] = []; // tableau ana fonction

  public addFunction(f: () => void) {
    this.subscribers.push(f);
  }

  public execute() {
    for (let f of this.subscribers) {
      f();
    }
  }
}

function createUser() {
  console.log("ok");
}

function sendEmailToUser() {
  console.log("mail");
}

const tabFunction = [createUser, sendEmailToUser];
for (let f of tabFunction) {
  f();
}

let classFunction = new ClassFunction();
classFunction.addFunction(createUser);
classFunction.addFunction(sendEmailToUser);
classFunction.execute();
