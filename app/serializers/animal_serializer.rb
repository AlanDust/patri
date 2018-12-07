class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :picture, :title, :description, :created_at, :updated_at

  belongs_to :artist

end
