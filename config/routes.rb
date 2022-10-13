Rails.application.routes.draw do
 resources :items, only:[:index, :create, :show, :update, :destroy]
 post '/signup', to: 'users#create'
end
