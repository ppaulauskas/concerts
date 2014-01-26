class CreateBands < ActiveRecord::Migration
  def change
    create_table :bands do |t|
      t.string :name
      t.text :related,  array: true, default: '{}'
      t.integer :rating
      t.string :image
      t.string :lastfmurl

      t.timestamps
    end
  end
end
