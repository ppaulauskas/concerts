class CreateConcerts < ActiveRecord::Migration
  def change
    create_table :concerts do |t|
      t.string :title
      t.string :description
      t.datetime :when
      t.string :location

      t.timestamps
    end
    add_index :concerts, [:title, :when, :location]
  end
end
