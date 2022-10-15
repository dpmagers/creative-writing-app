class RememberTagsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
rescue_from ActiveRecord::RecordInvalid, with: :invalid_data


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
        remember_tag = RememberTag.find(params[:id])
        remember_tag.update!(remember_tag_params)
        render json: remember_tag, status: :accepted
    end

    private

    def remember_tag_params
        params.permit(:remember_id, :tag_id)
    end 

    def record_not_found
        render json: {"error": "Remember_tag not found"}, status: 404
    end 

    def invalid_data(error)
        render json: {error: error.message}, status: 422
    end 

end
