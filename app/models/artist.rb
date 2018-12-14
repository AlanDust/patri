class Artist < ApplicationRecord
  has_many :animals
  has_many :portraits
  has_many :projects

  validates :name, presence: true

end
