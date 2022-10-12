class UsersController < ApplicationController

    def index
        @users = User.all 
        if @users
            render json: @users
        else
            render json: {error:"No users found"}, status: :not_found
        end
    end
end
