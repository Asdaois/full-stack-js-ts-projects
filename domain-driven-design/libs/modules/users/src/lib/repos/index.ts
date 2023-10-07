import { SequelizeUserRepo } from './implementations/sequelizeUserRepo';
import { SequelizeModels } from '@infra';

export const userRepo = new SequelizeUserRepo(SequelizeModels.default);
