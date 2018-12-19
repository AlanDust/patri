class CreateMusicInspirations < ActiveRecord::Migration[5.2]
  def change
    create_table :music_inspirations do |t|
      t.string :picture, null: false

      t.belongs_to :artist

      t.timestamps null: false
    end
  end
end
