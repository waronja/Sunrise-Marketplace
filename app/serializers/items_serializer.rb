class ItemsSerializer < ActiveModel::Serializer
  attributes :name, :description, :price, :instock, :dimensions
  has_one_attached :image

  belongs_to :category, serializer: CategorySerializer
end
