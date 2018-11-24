class Api::V1::DrawingsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: { categories: Drawing.all, current_user: current_user }
  end

  def create
    newDrawing = Drawing.new(drawing_params)

    if newDrawing.save
      render json: newDrawing
    else
      render json: { errors: newDrawing.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    render json: Drawing.find(params[:id])
  end

  private

  def drawing_params
    params.require(:drawing).permit(:picture, :title, :description, :artist_id)
  end
end
