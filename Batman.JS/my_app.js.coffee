class MyApp extends Batman.App


  # @route 'apps', 'apps#index'
  # @route 'apps/private', 'apps#private', as: 'privateApps'

   
  @root 'main#index'
   

  
(global ? window).MyApp = MyApp
