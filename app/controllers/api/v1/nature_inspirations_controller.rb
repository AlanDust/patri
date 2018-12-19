class Api::V1::NatureInspirationsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: { artwork: NatureInspiration.all, current_user: current_user }
  end

  def create
    new_nature_inspiration = NatureInspiration.new(nature_inspiration_params)

    if new_nature_inspiration.save
      render json: new_nature_inspiration
    else
      render json: { errors: new_nature_inspiration.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    render json: Nature_Inspiration.find(params[:id])
  end

  private

  def nature_inspiration_params
    params.require(:nature_inspiration).permit(:picture, :artist_id)
  end
end
