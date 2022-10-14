class ItemsController < ApplicationController
    # before_action :authorize

    def index
        @items = Item.all 
        if @items
            render json: @items, status: :ok
        else
            render json:{error:"No Items found"}, status: :not_found
        end
    end

    def create 
        if session[:user_id]
            user = User.find_by(session[:user_id])
            item = user.items.create(item_params, user_id==user)
            if item.valid?
                item.save
                render json: {data:item, status: "success"}, status: :created
            else
                 render json:{errors:item.errors.full_messages, status:"failed"}, status: :unprocessable_entity
            end
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def show
        @item = Item.find_by(id:params[:id])
        if @item
            render json: @item, include: :category, status: :ok
        else
            render json:{error:"Item Not found"}, status: :not_found
        end
    end

    def update
        @item = Item.find_by(id:params[:id])
        if @item
            @item.update(item_params)
            render json: @item, status: :created
        else
            render json: {error:@item.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update_popularity
        @item = Item.find_by(id:params[:id])
        if params[:popularity] == "popularity"
            @item.update(popularity + 1)
        else
            render json:{error:"no information was found"}, status: :not_found
        end
    end

    def destroy
        @item = Item.find_by(id:params[:id])
        if @item
            @item.destroy
        else
            render json:{error:"Item not found"}, status: :not_found
        end
    end



    private
    def item_params
        params.require(:item).permit(:name, :description, :price, :instock, :image, :category, :user_id)
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
