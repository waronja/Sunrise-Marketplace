class ChangeItem < ActiveRecord::Migration[7.0]
  def change
    remove_column :items, :user_id, :integer
  end
end
