export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
  }

  setToInactive(id: number) {

  }
}
