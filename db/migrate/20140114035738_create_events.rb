class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :band
      t.text :description
      t.text :eventtime
      t.string :venue

      t.timestamps
    end
  end
end
