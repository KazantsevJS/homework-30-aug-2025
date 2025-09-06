// Были конфликты имен, поэтому, для изоляции области видимости, я добавал {}
{
  class Socket {
    send(user: User) {}
  }

  class User {}

  // Отрефакторите ниже...

  enum WhomEnum {
    Self,
    Other,
    All,
  }

  const socket = new Socket();

  class Server {
    readonly users: User[] = [];

    send(whom: WhomEnum, user?: User): void {
    // Я разбил условие на 3 более читаемые
      if (whom === WhomEnum.Self) {
        if (user) {
          socket.send(user); 
        }
      } else if (whom === WhomEnum.Other) {
        for (const _user of this.users) {
          if (_user !== user) {
            socket.send(_user);
          }
        }
      } else if (whom === WhomEnum.All) {
        for (const _user of this.users) {
          socket.send(_user);
        }
      }
    }
  }
}
