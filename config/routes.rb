Rails.application.routes.draw do
 resources :items, only:[:index, :create, :show, :update, :destroy]
 resources :users, only:[:index, :create, :show]

 #session
 post '/login', to: 'sessions#create'
 post '/logout', to: 'sessions#destroy'
end