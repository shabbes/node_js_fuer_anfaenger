import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export default class UserService {
  async generateHash(password) {
    return await bcrypt.hash(password, SALT_ROUNDS);
  }

  async comparePassword(password, hash) {
    return await bcrypt.compare(password, hash);
  }
}
