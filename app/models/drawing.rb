class Drawing < ApplicationRecord
  belongs_to :artist

  validates :picture, presence: true
end
