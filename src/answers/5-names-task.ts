// Требуется подобрать соответствующие названия переменным, функциям, методам и тд...

type EventCallback<T> = (event: T) => void;

class EventEmitter<T> {
  private subscribers = new Set<EventCallback<T>>();

  subscribe(callback: EventCallback<T>) {
    this.subscribers.add(callback);

    return callback;
  }

  unsubscribe(callback: EventCallback<T>) {
    return this.subscribers.delete(callback);
  }

  emit(value: T) {
    for (const subscribe of this.subscribers) {
      subscribe(value);
    }
  }
}

const emitter = new EventEmitter<number>();

const subscription = emitter.subscribe((value) => {
  console.log(value);
});

emitter.emit(5);

emitter.unsubscribe(subscription);

emitter.emit(10);
