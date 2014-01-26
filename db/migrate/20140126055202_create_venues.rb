class CreateVenues < ActiveRecord::Migration
  def change
    create_table :venues, :primary_key => :venue_id do |t|
      t.string :name
      t.float :lat
      t.float :lon
      t.string :city
      t.string :country
      t.string :street
      t.string :postal
      t.string :lastfmurl
      t.string :website

      t.timestamps
    end
  end
end
