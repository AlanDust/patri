class Api::V1::PaintingsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

    def index
      render json: { artwork: Painting.all, current_user: current_user }
    end

    def create
      newPainting = Painting.new(painting_params)

      if newPainting.save
        render json: newPainting
      else
        render json: { errors: newPainting.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def show
      render json: Painting.find(params[:id])
    end

    private

    def painting_params
      params.require(:painting).permit(:picture, :title, :description, :artist_id)
    end
  end
