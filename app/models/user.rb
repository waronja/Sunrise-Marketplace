class User < ApplicationRecord
    has_secure_password

    has_many :items
    validates :username, presence: true, uniqueness: true
end
