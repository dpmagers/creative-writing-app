class TagsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
rescue_from ActiveRecord::RecordInvalid, with: :invalid_data


    def index
        render json: Tag.all, status: :ok
    end 
    
    def show
        tag = Tag.find(params[:id])
        render json: tag, status: :ok
    end 

    def create
        tag = Tag.create!(tag_params)
        render json: tag, status: :created
    end

    def destroy
        tag = Tag.find(params[:id])
            tag.destroy
            render json: {}, status: 204
    end 

    def specific_remember
        remember_tags = RememberTag.where(remember_id: params[:remember_id])
        render json: remember_tags.map{|it| it.tag}, status: 200
        
   
    end 

    private

    def tag_params
        params.permit(:name)
    end 


    def record_not_found
        render json: {"error": "Tag not found"}, status: 404
    end

    def invalid_data(error)
        render json: {error: error.message}, status: 422
    end 

end