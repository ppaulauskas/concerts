class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events, :primary_key => :event_id do |t|
      t.text :title
      t.text :headliner
      t.text :artists, array: true, default: '{}'
      t.integer :venue_id
      t.timestamp :eventtime

      t.timestamps
    end
  end
end
