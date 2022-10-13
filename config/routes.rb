Rails.application.routes.draw do
 resources :items, only:[:index, :create, :show, :update, :destroy]
 post '/login', to: 'sessions#create'
 post '/signup', to: 'users#create'
end