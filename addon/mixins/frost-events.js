/**
 * Mixin for frost-events
 */
import {events} from '../utils'
import Ember from 'ember'
const {Mixin, on} = Ember

export default Mixin.create({
  initEvents: on('init', function () {
    events.init.call(this, events.map, events.addProperty)
  })
})
