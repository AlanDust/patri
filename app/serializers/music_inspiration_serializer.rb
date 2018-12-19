class MusicInspirationSerializer < ActiveModel::Serializer
  attributes :id, :picture, :created_at, :updated_at

  belongs_to :artist

end
