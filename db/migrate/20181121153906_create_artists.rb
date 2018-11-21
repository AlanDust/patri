class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|

      t.string :name, null: false
      t.string :picture
      t.text :biography

      t.timestamps null: false
    end
  end
end
