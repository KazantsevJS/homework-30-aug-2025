{
  class Socket {
    send(user: User) {}
  }

  class User {}

  const socket = new Socket();

  class Server {
    readonly users: User[] = [];

    sendToSelf(user: User): void {
      socket.send(user);
    }

    sendToOthers(excludedUser: User): void {
      this.users.forEach((_user) => {
        if (_user !== excludedUser) {
          socket.send(_user);
        }
      });
    }

    sendToAll(): void {
      this.users.forEach((user) => socket.send(user));
    }
  }
}
