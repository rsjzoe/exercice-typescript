interface Event {
  name: string;
  payload: any;
}

interface Subscriber {
  eventName: string;
  listeners: (() => void)[];
}

class EventManager {
  private subscribers: Subscriber[] = [
    { eventName: "login", listeners: [save, sendCodeVerification] },
    { eventName: "delete", listeners: [] },
  ];

  public subscribe(eventName: string, f: () => void) {
    for (let subscriber of this.subscribers) {
      if (subscriber.eventName == eventName) {
        subscriber.listeners.push(f);
        return;
      }
    }
    this.subscribers.push({ eventName, listeners: [f] });

    // let find = this.subscribers.find((sub) => sub.eventName == eventName);
    // if (find) {
    // } else {
    //   this.subscribers.push({ eventName, listeners: [f] });
    // }
  }

  public emit(eventName: string) {
    for (let subscriber of this.subscribers) {
      if (subscriber.eventName == eventName) {
        for (let f of subscriber.listeners) {
          f();
        }
      }
    }
  }

  public removeEvent(eventName: string) {
    this.subscribers = this.subscribers.filter(
      (sub) => sub.eventName != eventName
    );
  }
}

function save() {
  //
}
function sendCodeVerification() {
  //
}

let eventManager = new EventManager();
eventManager.subscribe("login", () => {
  console.log("login enao");
});

eventManager.subscribe("update", () => {
  console.log("update");
});

eventManager.emit("login");
