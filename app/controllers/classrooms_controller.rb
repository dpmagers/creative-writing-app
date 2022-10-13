class ClassroomsController < ApplicationController

    def index 
        render json: Classroom.all, status: :ok
    end 

    def show
        classroom = Classroom.find(params[:id])
        render json: classroom, status: :ok
    end

end
