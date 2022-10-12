class Item < ApplicationRecord
    belongs_to :user
    belongs_to :category

    validates :name, presence: true
    validates :price, presence: true, numericality: true
    validates :description, presence:true, length:{minimum:10}
end
