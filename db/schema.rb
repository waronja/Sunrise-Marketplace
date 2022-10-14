ActiveRecord::Schema[7.0].define(version: 2022_10_14_052026) do
  create_table "items", force: :cascade do |t|
    t.string "name"
    t.integer "price"
    t.text "description"
    t.integer "instock"
    t.string "image"
    t.string "category"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_items_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "items", "users"
end
