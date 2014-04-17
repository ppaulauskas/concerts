class DropUsers < ActiveRecord::Migration
  def up
    if User.table_exists?
     drop_table :users
    end
  end
  
  def down      
    create_table "users", force: true do |t|
      t.string   "name"
      t.string   "email"
      t.datetime "created_at"
      t.datetime "updated_at"
      t.string   "password_digest"
      t.string   "remember_token"
      t.boolean  "admin",           default: false
    end

    add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
    add_index "users", ["remember_token"], name: "index_users_on_remember_token", using: :btree
  end
end
