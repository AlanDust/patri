class Api::V1::BottlesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

    def index
      render json: { artwork: Bottle.all, current_user: current_user }
    end

    def create
      newBottle = Bottle.new(bottle_params)

      if newBottle.save
        render json: newBottle
      else
        render json: { errors: newBottle.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def show
      render json: Bottle.find(params[:id])
    end

    private

    def bottle_params
      params.require(:bottle).permit(:picture, :title, :description, :artist_id)
    end
  end
