import Run from './run';
import Config from './config';

import compareText from './modules/compareText/compareTextModule'

export default angular.module('test', [
    'ui.router',
    'compareText',
    'templates'
])
.config(Config)
.run(Run);

