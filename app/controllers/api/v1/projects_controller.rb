class Api::V1::ProjectsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

    def index
      render json: { artwork: Project.all, current_user: current_user }
    end

    def create
      newProject = Project.new(project_params)

      if newProject.save
        render json: newProject
      else
        render json: { errors: newProject.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def show
      render json: Project.find(params[:id])
    end

    private

    def project_params
      params.require(:project).permit(:picture, :title, :description, :artist_id)
    end
  end
