class RemembersController < ApplicationController


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

    # needs current user auth
    def update
        remember = Remember.update!(remember_params)
        render json: remember, status: :accepted
    end

    # needs current user auth
    def destroy
        remember = Remember.find(params[:id])
            review.destroy
            render json: {}, status: 204
    end 

    private

    def remember_params
        params.permit(:user_id, :set_to_private, :text)
    end 



end
