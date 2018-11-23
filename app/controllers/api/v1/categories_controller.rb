class Api::V1::CategoriesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

    def index
      render json: { categories: Category.all, current_user: current_user }
    end

    def create
      newCategory = Category.new(category_params)

      if newCategory.save
        render json: newCategory
      else
        render json: { errors: newCategory.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def show
      render json: Category.find(params[:id])
    end

    private

    def category_params
      params.require(:category).permit(:type, :artist_id, :artwork_id)
    end
  end
end
