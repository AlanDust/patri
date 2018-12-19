class Api::V1::CatInspirationsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: { artwork: CatInspiration.all, current_user: current_user }
  end

  def create
    new_cat_inspiration = CatInspiration.new(cat_inspiration_params)

    if new_cat_inspiration.save
      render json: new_cat_inspiration
    else
      render json: { errors: new_cat_inspiration.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    render json: Cat_Inspiration.find(params[:id])
  end

  private

  def cat_inspiration_params
    params.require(:cat_inspiration).permit(:picture, :artist_id)
  end
end
