class CreateEmaillists < ActiveRecord::Migration
  def change
    create_table :emaillists do |t|
      t.string :email

      t.timestamps
    end
  end
end
