// Legacy Code
import $ from 'jquery'

import { setText } from './actions';

$('#mytext').click(function(e) {
  console.log('LEGACY CODE implemention')

  // Fire
  window.store.dispatch(setText(true, "Redux inside the legacy code...!"))
})
