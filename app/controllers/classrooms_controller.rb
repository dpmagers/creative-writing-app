class ClassroomsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found


    def index 
        render json: Classroom.all, status: :ok
    end 

    def show
        classroom = Classroom.find(params[:id])
        render json: classroom, serializer: ClassroomUsersSerializer, status: :ok
    end


    private

    def record_not_found
        render json: {"error": "Classroom not found"}, status: 404
    end 


end
