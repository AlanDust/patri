class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|

      t.text :medium
      t.belongs_to :artist
      t.belongs_to :artwork

      t.timestamps null: false
    end
  end
end
