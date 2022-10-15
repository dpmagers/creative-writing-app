class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authorize

    private 
    
    def authorize
        @current_user = User.find_by(id: session[:user_id])
  
        render json: {errors: ["Not Authorized, please login"]}, status: :unauthorized unless @current_user
    end 

    def is_authorized?
        permitted = @current_user.admin?
        # || remember.user_id == current_user.id
        render json: {errors: "This user does not have permission"}, status: :forbidden
    end 
end
