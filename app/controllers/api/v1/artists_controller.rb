class Api::V1::ArtistsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Artist.all
  end

  def create
    newArtist = Artist.new(artist_params)

    if newArtist.save
      render json: newArtist
    else
      render json: { errors: newArtist.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    render json: Artist.find(params[:id])
  end

  private

  def artist_params
    params.require(:artist).permit(:name, :picture, :biography, :id)
  end
end
