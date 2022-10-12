class ItemsController < ApplicationController

    def index
        @items = Item.all 
        if @items
            render json: @items, include: :category, status: :ok
        else
            render json:{error:"No Items found"}, status: :not_found
        end
    end

    def create 
        @item = Item.create(item_params)
        if @item.valid?
            render json: {data:@item, status: "success"}, status: :created
        else
            render json:{error:@item.errors.full_messages, status:"failed"}, status: :unprocessable_entity
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
        params.require(:item).permit(:name, :description, :price, :dimensions)
    end
end
