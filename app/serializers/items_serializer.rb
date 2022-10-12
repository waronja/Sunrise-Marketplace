class ItemsSerializer < ActiveModel::Serializer
  attributes :name, :description, :price

  belongs_to :category, serializer: CategorySerializer
end
