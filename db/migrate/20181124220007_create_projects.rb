class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|

      t.string :picture, null: false
      t.string :title
      t.string :description

      t.belongs_to :artist

      t.timestamps null: false
    end
  end
end
