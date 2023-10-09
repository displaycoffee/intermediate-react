/* Local scripts */
import { theme } from './_config/scripts/theme';
import { utils } from './_config/scripts/utils';
import { variables } from './_config/scripts/variables';

/* Local components */
import { Index } from './entry/index/Index';

/* App component */
export const App = () => {
	return <Index theme={theme} utils={utils} variables={variables} />;
};

export default App;
