class YourApp.User extends Batman.Model
  @storageKey: 'user'
  @resourceName: 'user'

  #fields
  @encode 'firstname'
  @encode 'numberid'
  
  # validations
    @validate "firstname", presence: true
    @validate "numberid", presence: true