class Api::V1::ArtistsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Artist.all
  end

  def show
    render json: Artist.find(params[:id])
  end

  private

  def artist_params
    params.require(:artist).permit(:name, :picture, :biography, :id)
  end
end
