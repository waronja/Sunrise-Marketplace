class ItemsSerializer < ActiveModel::Serializer
  attributes :name, :description, :price, :instock, :dimensions
  
  belongs_to :category, serializer: CategorySerializer
end
