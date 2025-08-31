
class Socket {
    send(user: User) {}
}

class User {}

// Отрефакторите ниже...

enum WhomEnum {
    Self, 
    Other, 
    All
}

const socket = new Socket();

class Server {
    readonly users: User[] = [];

    send(whom: WhomEnum, user?: User): void {
        for(const _user of this.users) {
            if (
                (whom === WhomEnum.Self && user === _user)
                ||
                (whom === WhomEnum.Other && _user !== user)
                ||
                (whom === WhomEnum.All)
            ) {
                socket.send(_user);
            }
        }
    }

}