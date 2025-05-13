// import { callout }    from './tags';
// import { fence }      from './nodes';
// import { heading}     from './nodes'
// import * as functions from './functions';
// import { globals } from './vars';

// export default {
//   tags: { callout },
//   nodes: { fence, heading },
//   functions,
//   variables: globals
// };

import * as tags from './tags';
import * as nodes from './nodes';
import * as functions from './functions';

export default {
  tags: tags,
  nodes: nodes,
  functions: functions
}