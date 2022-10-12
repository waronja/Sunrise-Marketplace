class UsersSerializer < ActiveModel::Serializer
  attributes :username, :password

  has_many :items, serializer: ItemsSerializer
end
