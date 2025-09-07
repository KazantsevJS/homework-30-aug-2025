// Были конфликты имен, поэтому, для изоляции области видимости, я добавал {}
{
  class Socket {
    send(user: User) {}
  }

  class User {}

  enum WhomEnum {
    Self,
    Other,
    All,
  }

  const socket = new Socket();

  class Server {
    readonly users: User[] = [];

    send(whom: WhomEnum, user?: User): void {
      switch (whom) {
        case WhomEnum.Self:
          this.sendToSelf(user);
          break;
        case WhomEnum.Other:
          this.sendToOthers(user);
          break;
        case WhomEnum.All:
          this.sendToAll();
          break;
      }
    }

    private sendToSelf(user?: User): void {
      if (user) {
        socket.send(user);
      }
    }

    private sendToOthers(excludedUser?: User): void {
      this.users.forEach((_user) => {
        if (_user !== excludedUser) {
          socket.send(_user);
        }
      });
    }

    private sendToAll(): void {
      this.users.forEach((user) => socket.send(user));
    }
  }
}
