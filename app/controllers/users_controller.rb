class UsersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
# rescue_from ActiveRecord::RecordInvalid, with: :invalid_data


        def index 
        render json: User.all, status: :ok
    end 

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end 

    def show
        render json: @current_user
    end

    private 

    def user_params
        params.permit(:username, :password, :classroom_id, :full_name, :is_instructor)
    end

    def record_not_found
        render json: {"error": "User not found"}, status: 404
    end 

    def invalid_data(error)
        render json: {error: error.message}, status: 422
    end 



    # def show
    #     user = User.find(params[:id])
    #     render json: user, status: :ok
    # end

end
