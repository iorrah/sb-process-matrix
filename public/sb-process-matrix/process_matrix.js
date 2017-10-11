import componentTemplate from './process_matrix.html'
import componentStyle from './process_matrix.less'

import {ProcessMatrixController} from './process_matrix.controller.js'

const bindings = {
  sbModel: '<',
};

export const processMatrixComponent = {
  controller: ProcessMatrixController,
  template: componentTemplate,
  bindings: bindings
};