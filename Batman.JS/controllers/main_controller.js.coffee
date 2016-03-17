class MyApp.MainController extends MyApp.ApplicationController
  routingKey: 'main'

  index: (params) ->
    @set 'firstName', ''
    @set 'numberid', ''

  