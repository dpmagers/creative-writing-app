class RemembersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
rescue_from ActiveRecord::RecordInvalid, with: :invalid_data
before_action :authorize
# before_action :is_authorized?, only: [:update, :destroy]

    def index
        render json: Remember.all, status: :ok

    end 



    def show
        remember = Remember.find(params[:id])
        render json: remember, status: :ok
    end 

    def create
        remember = Remember.create!(remember_params)
        render json: remember, status: :created
    end

    def update
        remember = Remember.find(params[:id])
        if remember.user_id == @current_user.id || @current_user.admin == true
            remember.update!(remember_params)
            render json: remember, status: :accepted
        else 
            render json: {errors: ["Not Authorized"]}, status: 401 
        end 
    end


    def destroy
        remember = Remember.find(params[:id])
        if remember.user_id == @current_user.id || @current_user.admin == true
            remember.destroy
            render json: {}, status: 204
        else
            render json: {errors: ["Not Authorized"]}, status: 401
        end 
    end 



    private

    def authorize
        @current_user = User.find_by(id: session[:user_id])
        render json: {errors: ["Not Authorized, please login"]}, status: :unauthorized unless @current_user
    end 

    def remember_params
        params.permit(:user_id, :set_to_private, :text)
    end 

    def record_not_found
        render json: {"error": "Remember not found"}, status: 404
    end 

    def invalid_data(error)
        render json: {error: error.message}, status: 422
    end 

    # def is_authorized?
    #     permitted = @current_user.admin?
    #     # || remember.user_id == current_user.id
    #     render json: {errors: "This user does not have permission"}, status: :forbidden unless permitted
    # end 



end


        # remember = Remember.find(params[:id])
        # if remember.user_id == @current_user.id || @current_user.admin == true
        #     render json: Remember.all, status: :ok
        # else 
        #     render json: Remember.where(set_to_private: false), status: :ok
        # end

            # Remember.where(user_id: @current_user.id)
    # don't display "private" remembers unless 
    # remember.user_id == @current_user.id || @current_user.admin == true
    # don't show if remember.set_to_private == true
    # if remember.set_to_private == true
    # render json Remember.where(set_to_private: false)
    # e
    # don't display "private" remembers
    
    # Remember.where(set_to_private: true)