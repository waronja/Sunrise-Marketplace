Rails.application.routes.draw do
 resources :items, only:[:index, :create, :show, :update, :destroy]
 resources :categories, only:[:index, :create, :show]
end
