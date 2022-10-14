class UsersController < ApplicationController

    def index
        @users = User.all 
        if @users
            render json: @users
        else
            render json: {error:"No users found"}, status: :not_found
        end
    end

    # def show
    #     render json: @current_user
    # end
    

    def create 
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: {data:user,status: "success"}, status: :created
        else
            render json:{error:user.errors.full_messages,status:"failed"}, status: :unprocessable_entity
        end
    end

    def show
        user = User.find(session[:user_id])
        render json: user
    end

    private
    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
