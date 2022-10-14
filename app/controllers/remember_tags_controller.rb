class RememberTagsController < ApplicationController

# temp for dev
    def index
        render json: RememberTag.all, status: :ok
    end 

    def show
        remember_tag = RememberTag.find(params[:id])
        render json: remember_tag, status: :ok
    end 
    # temp for dev


    def create
        remember_tag = RememberTag.create!(remember_tag_params)
        render json: remember_tag, status: :created
    end

    def update
        remember_tag = RememberTag.update!(remember_tag_params)
        render json: remember_tag, status: :accepted
    end

    private

    def remember_tag_params
        params.permit(:remember_id, :tag_id)
    end 
end
