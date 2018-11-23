class Api::V1::ArtworksController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }


    def index
      render json: { artwork: Artwork.all, current_user: current_user }
    end

    def create
      newArtwork = Artwork.new(artwork_params)

      if newArtwork.save
        render json: newArtwork
      else
        render json: { errors: newArtwork.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def show
      render json: Artwork.find(params[:id])
    end

    private

    def artwork_params
      params.require(:artwork).permit(:picture, :title, :description)
    end
  end
