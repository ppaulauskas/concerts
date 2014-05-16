class AddIndexToEmaillistsEmail < ActiveRecord::Migration
  def change
    add_index :emaillists, :email, unique: true
  end
end
