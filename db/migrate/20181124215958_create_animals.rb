class CreateAnimals < ActiveRecord::Migration[5.2]
  def change
    create_table :animals do |t|

      t.string :picture, null: false
      t.string :title
      t.string :description

      t.belongs_to :artist

      t.timestamps null: false
    end
  end
end
