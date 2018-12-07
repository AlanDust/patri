class Api::V1::AnimalsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: { categories: Animal.all, current_user: current_user }
  end

  def create
    newAnimal = Animal.new(animal_params)

    if newAnimal.save
      render json: newAnimal
    else
      render json: { errors: newAnimal.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    render json: Animal.find(params[:id])
  end

  private

  def animal_params
    params.require(:animal).permit(:picture, :title, :description, :artist_id)
  end
end
