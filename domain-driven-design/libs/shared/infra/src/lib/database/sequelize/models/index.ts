import * as config from '../config';
import { defineBaseUser, BaseUser} from './BaseUser';

defineBaseUser(config.connection)

const models = {
  BaseUser: BaseUser,
};

export type Models = typeof models;
export default models;
