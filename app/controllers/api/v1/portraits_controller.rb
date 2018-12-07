class Api::V1::PortraitsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

    def index
      render json: { artwork: Portrait.all, current_user: current_user }
    end

    def create
      newPortrait = Portrait.new(portrait_params)

      if newPortrait.save
        render json: newPortrait
      else
        render json: { errors: newPortrait.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def show
      render json: Portrait.find(params[:id])
    end

    private

    def portrait_params
      params.require(:portrait).permit(:picture, :title, :description, :artist_id)
    end
  end
