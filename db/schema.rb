
ActiveRecord::Schema[7.0].define(version: 2022_10_12_102038) do
  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.integer "instock"
    t.integer "price"
    t.string "dimensions"
    t.integer "category_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "popularity", default: 0
    t.index ["category_id"], name: "index_items_on_category_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "items", "categories"
end
