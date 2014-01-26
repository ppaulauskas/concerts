# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140126055202) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "band_info", id: false, force: true do |t|
    t.string  "name",      limit: 64,  null: false
    t.text    "related",                            array: true
    t.integer "rating"
    t.string  "image",     limit: 64
    t.string  "lastfmurl", limit: 128
  end

  create_table "band_info_temp", id: false, force: true do |t|
    t.string  "name",      limit: 64
    t.text    "related",               array: true
    t.integer "rating"
    t.string  "image",     limit: 64
    t.string  "lastfmurl", limit: 128
  end

  create_table "bands", id: false, force: true do |t|
    t.string  "name",      limit: 64,  null: false
    t.text    "related",                            array: true
    t.integer "rating"
    t.string  "image",     limit: 64
    t.string  "lastfmurl", limit: 128
  end

  create_table "event_info", id: false, force: true do |t|
    t.integer "event_id",              null: false
    t.string  "title",     limit: 128
    t.string  "headliner", limit: 64
    t.text    "artists",                            array: true
    t.integer "venue_id"
    t.text    "eventtime"
  end

  create_table "event_info_temp", id: false, force: true do |t|
    t.integer  "event_id",              null: false
    t.string   "title",     limit: 128
    t.string   "headliner", limit: 64
    t.text     "artists",                            array: true
    t.integer  "venue_id"
    t.datetime "eventtime"
  end

  create_table "events", primary_key: "event_id", force: true do |t|
    t.text     "title"
    t.text     "headliner"
    t.text     "artists",    default: [], array: true
    t.integer  "venue_id"
    t.datetime "eventtime"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "lastfm_nyc_raw", primary_key: "row_id", force: true do |t|
    t.text "data"
  end

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

  create_table "venue_info", id: false, force: true do |t|
    t.integer "venue_id",              null: false
    t.string  "name",      limit: 64
    t.float   "lat"
    t.float   "long"
    t.string  "city",      limit: 64
    t.string  "country",   limit: 64
    t.string  "street",    limit: 128
    t.string  "postal",    limit: 16
    t.string  "lastfmurl", limit: 128
    t.string  "website",   limit: 128
  end

  create_table "venue_info_temp", id: false, force: true do |t|
    t.integer "venue_id"
    t.string  "name",      limit: 64
    t.float   "lat"
    t.float   "lon"
    t.string  "city",      limit: 64
    t.string  "country",   limit: 64
    t.string  "street",    limit: 128
    t.string  "postal",    limit: 16
    t.string  "lastfmurl", limit: 128
    t.string  "website",   limit: 128
  end

  create_table "venues", primary_key: "venue_id", force: true do |t|
    t.string   "name"
    t.float    "lat"
    t.float    "lon"
    t.string   "city"
    t.string   "country"
    t.string   "street"
    t.string   "postal"
    t.string   "lastfmurl"
    t.string   "website"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
