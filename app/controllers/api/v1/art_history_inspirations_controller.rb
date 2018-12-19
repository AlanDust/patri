class Api::V1::ArtHistoryInspirationsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: { artwork: ArtHistoryInspiration.all, current_user: current_user }
  end

  def create
    new_art_history_inspiration = ArtHistoryInspiration.new(art_history_inspiration_params)

    if new_art_history_inspiration.save
      render json: new_art_history_inspiration
    else
      render json: { errors: new_art_history_inspiration.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    render json: Art_History_Inspiration.find(params[:id])
  end

  private

  def art_history_inspiration_params
    params.require(:art_history_inspiration).permit(:picture, :artist_id)
  end
end
