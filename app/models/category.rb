class Category < ApplicationRecord
  belongs_to :artist
  belongs_to :artwork

end
