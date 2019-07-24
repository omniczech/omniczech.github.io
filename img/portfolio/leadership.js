import Route from '@ember/routing/route'

export default Route.extend({
  model: function () {
    return [
      {
        id: 1,
        name: 'Team member 1'
      },
      {
        id: 2,
        name: 'Team member 2'
      },
      {
        id: 3,
        name: 'Team member 3'
      }
    ]
  }
})
