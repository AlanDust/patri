class Artwork < ApplicationRecord
  has_many :categories
  has_many :artists, through: :categories

  validates :picture, presence: true
end
