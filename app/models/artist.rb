class Artist < ApplicationRecord
  has_many :categories
  has_many :artworks, through: :categories

  validates :name, presence: true

end
