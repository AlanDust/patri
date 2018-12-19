class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :picture, :biography

  has_many :animals
  has_many :portraits
  has_many :projects
  has_many :music_inspirations
  has_many :cat_inspirations
  has_many :nature_inspirations
  has_many :art_history_inspirations

end
