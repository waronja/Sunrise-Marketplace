class CategorySerializer < ActiveModel::Serializer
  attributes :name

  has_many :items, serializer: ItemsSerializer
end
