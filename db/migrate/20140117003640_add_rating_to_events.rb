class AddRatingToEvents < ActiveRecord::Migration
  def change
    add_column :events, :rating, :integer
  end
end
