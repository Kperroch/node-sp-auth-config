import * as inquirer from 'inquirer';
import { IAuthContext, IAuthConfigSettings } from '../../interfaces';
declare const wizard: (_authContext: IAuthContext, answersAll?: inquirer.Answers, _settings?: IAuthConfigSettings) => Promise<inquirer.Answers>;
export default wizard;
