class User < ApplicationRecord
    has_secure_password :true

    has_many :items
end
