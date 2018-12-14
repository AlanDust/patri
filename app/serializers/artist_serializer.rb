class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :picture, :biography

  has_many :animals
  has_many :portraits
  has_many :projects

end
