class CreateArtHistoryInspirations < ActiveRecord::Migration[5.2]
  def change
    create_table :art_history_inspirations do |t|
      t.string :picture, null: false

      t.belongs_to :artist

      t.timestamps null: false
    end
  end
end
