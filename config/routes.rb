Rails.application.routes.draw do
 resources :items, only:[:index, :create, :show, :update, :destroy]
#  post '/signup', to: 'users#create'
#  post '/login', to: 'sessions#create'
#  get '/me', to: 'users#show'
#  delete '/logout', to: 'sessions#destroy'
end
