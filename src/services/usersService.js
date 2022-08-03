import PersistenceFactory from '../daos/persistenceFactory.js';

export default class UsersService {
  constructor() {
    // this.usersDao = new UserDaoArray();
    // this.usersDao = new UsersDaoFile();
    // this.usersDao = new UsersDaoDB();
    this.usersDao;
    this.init();
  }
  init = async () => {
    this.usersDao = await PersistenceFactory.getPersistence();
  };
  getUsers = async () => {
    return await this.usersDao.getAll();
  };
  addUser = async (user) => {
    return await this.usersDao.save(user);
  };
}
