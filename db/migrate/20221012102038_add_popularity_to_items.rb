class AddPopularityToItems < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :popularity, :integer
  end
end
