class AddIndexToBandsName < ActiveRecord::Migration
  def change
    add_index :bands, :name, unique: true
  end
end
