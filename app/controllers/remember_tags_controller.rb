class RememberTagsController < ApplicationController
# rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
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

    def destroy
        remember_tag = RememberTag.find(params[:id])
        # if remember_tag.user_id == @current_user.id || @current_user.admin == true
            remember_tag.destroy
            render json: {}, status: 204
        # else
            # render json: {errors: ["Not Authorized"]}, status: 401
    end 

    # def specific_remember_tag
        
    #     remember_tags = RememberTag.select{|rt| rt.remember_id == params[:remember_id]}
    #     render json: remember_tags, status: 200 
    # end 

    # delete "/tags/remember_tag/:remember_id/:tag_id", to: "remember_tags#delete_remember_tag"
    def delete_remember_tag
        RememberTag.find_by(remember_id: params[:remember_id], tag_id: params[:tag_id]).destroy 
        render json: {}, status: 204
    end 



    private

    def remember_tag_params
        params.permit(:remember_id, :tag_id)
    end 

    # def record_not_found
    #     render json: {"error": "Remember_tag not found"}, status: 404
    # end 

    def invalid_data(error)
        render json: {error: error.message}, status: 422
    end 

end
