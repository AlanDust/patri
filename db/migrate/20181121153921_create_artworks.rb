class CreateArtworks < ActiveRecord::Migration[5.2]
  def change
    create_table :artworks do |t|

      t.string :picture, null: false
      t.string :title
      t.string :description

      t.timestamps null: false
    end
  end
end
