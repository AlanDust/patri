class Artist < ApplicationRecord
  belongs_to :user
  has_many :categories
  has_many :artworks, through: :categories

end
