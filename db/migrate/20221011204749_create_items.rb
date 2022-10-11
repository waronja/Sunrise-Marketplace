class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.text :descrption
      t.integer :price
      t.string :dimensions
      t.belongs_to :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
