class User < ActiveRecord::Base
  
  default_scope { order(created_at: :desc) }    #Sorting User results by created_at field and descending.
    
  before_save :set_username     #Executes set_username method before the object is saved to the db.
    
  private
    
    def set_username
      self.username = "#{name}.#{lastname}"     #Concatenate the name + username to build the username field.
    end
    
end
