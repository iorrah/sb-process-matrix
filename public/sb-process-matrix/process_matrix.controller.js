/**
 * Main component controller
 */
class ProcessMatrixController {

  constructor () {
    console.log('ProcessMatrixController');
  }

  /**
   * input bindings are ready
   *
   * @return {undefined} undefined
   */
  $onInit () {
    $(function() {
      $('#sortable').sortable({
        placeholder: 'blank-row'
      });
    });
  }
}

export { ProcessMatrixController }