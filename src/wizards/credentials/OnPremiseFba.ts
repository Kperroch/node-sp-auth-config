import * as inquirer from 'inquirer';

import { IOnpremiseFbaCredentials } from 'node-sp-auth';
import { IAuthContext, IAuthConfigSettings } from '../../interfaces';
import { defaultPasswordMask } from '../../utils';

const wizard = (authContext: IAuthContext, answersAll: inquirer.Answers = {}, _settings: IAuthConfigSettings = {}): Promise<inquirer.Answers> => {
  const onPremiseFbaCredentials: IOnpremiseFbaCredentials = (authContext.authOptions as IOnpremiseFbaCredentials);
  const promptFor: inquirer.Question[] = [
    {
      name: 'username',
      message: 'User name',
      type: 'input',
      default: onPremiseFbaCredentials.username,
      validate: (answer: string) => {
        if (answer.length === 0) {
          return false;
        }
        return true;
      }
    }, {
      name: 'password',
      message: 'Password',
      type: 'password',
      default: onPremiseFbaCredentials.password ? defaultPasswordMask : null,
      validate: (answer: string) => {
        if (answer.length === 0) {
          return false;
        }
        return true;
      }
    }
  ];
  return inquirer.prompt(promptFor).then(answers => {
    return {
      ...answersAll,
      ...answers,
      password: answers.password === defaultPasswordMask
        ? onPremiseFbaCredentials.password
        : answers.password,
      ...{
        fba: true
      }
    };
  });
};

export default wizard;
