
class UsersController < ApplicationController
  # GET /users -> Listing all users.
  def index           
      @users = User.all   #Find all users from users table.
      
      respond_to do |format|
        format.html{
          render :text => "", :layout => true    
        }
        format.json{
          render :json => @users.to_json      #Respond for json/ajax requests, It returns the object model in json format.
        }
      end
  end    
  
  # POST /users -> Create new user.
  def create
    save_user   
  end
  
  # GET /users/:id -> Finds and returns a user based on the user id parameter.
  def show
    @user = User.find(params[:id])
    
    respond_to do |format|
        format.html{
          redirect_to @user
        }
        format.json{
          render :json => @user.to_json
        }
    end
  end
  
  # PUT /users/:id -> Update existing user.
  def update
    save_user
  end
  
  # DELETE /users/:id -> Deletes the user found for the user id parameter.
  def destroy
    @user = User.find(params[:id])
    @user.destroy
    
    respond_to do |format|
      format.html{
        redirect_to action: "index"  
      }
      format.json{
        render :json => { :success => :true }
      }
    end
  end
  
  
  private
  
  # Private instance common method used by Create and Update
  def save_user
    @user = params[:id] ? User.find(params[:id]) : User.new(user_params)    #Is new or existing object?.
    @user.id.nil? ? @user.save : @user.update!(user_params)       #If is new then save it, else updated it.
      
    respond_to do |format|
      format.html{
        redirect_to action: "index"
      }
      format.json{
        render :json => @user.to_json     #Returns saved or updated object in json format when Json/Ajax request..
      }
    end
  end
  
  # Private instance method for filtering incoming parameter for user model.
  def user_params
    params.require(:user).permit(:name, :lastname, :age, :phone)
  end
    
end
