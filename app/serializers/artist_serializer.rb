class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :picture, :biography

  has_many :categories
  has_many :artworks, through: :categories

end
