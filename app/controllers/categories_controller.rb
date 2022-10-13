class CategoriesController < ApplicationController

    def index
        categories = Category.all 
        if categories
            render json: categories, status: :ok
        else
            render json:{error:"No Categories found"}, status: :not_found
        end
    end
    

    def create
        category = Category.create(category_params)
        if category.valid?
            render json: category, status: :created
        else
            render json:{errors:category.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show 
        category = Category.find_by(id:params[:id])
        if category
            render json: category, status: :ok
        else
            render json:{error:"No Category found"}, status: :not_found
        end

    end

    private
    def category_params
        params.permit(:name)
    end
end
