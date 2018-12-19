class Api::V1::MusicInspirationsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: { artwork: MusicInspiration.all, current_user: current_user }
  end

  def create
    new_music_inspiration = MusicInspiration.new(music_inspiration_params)

    if new_music_inspiration.save
      render json: new_music_inspiration
    else
      render json: { errors: new_music_inspiration.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    render json: Music_Inspiration.find(params[:id])
  end

  private

  def music_inspiration_params
    params.require(:music_inspiration).permit(:picture, :artist_id)
  end
end
