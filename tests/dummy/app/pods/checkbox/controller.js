import Ember from 'ember'

export default Ember.Controller.extend({
  error: true,

  actions: {
    onInputHandler (attrs) {
      console.log('checkbox value: ' + attrs.value)
      this.notifications.addNotification({
        message: "value: '" + attrs.value + "'",
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    }
  }
})
