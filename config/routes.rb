Rails.application.routes.draw do
  resources :tags, only: [:index, :show, :create, :destroy]
  resources :remember_tags, only: [:create, :update, :index, :show, :destroy]
  resources :remembers, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show]
  resources :classrooms, only: [:index, :show]
  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # get '/hello', to: 'application#hello_world'

  # get '*path',
  #     to: 'fallback#index',
  #     constraints: ->(req) { !req.xhr? && req.format.html? }

end
