class Artist < ApplicationRecord
  has_many :animals
  has_many :portraits
  has_many :projects
  has_many :music_inspirations
  has_many :cat_inspirations
  has_many :nature_inspirations
  has_many :art_history_inspirations

  validates :name, presence: true

end
