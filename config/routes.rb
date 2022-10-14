Rails.application.routes.draw do
  resources :tags, only: [:index, :show, :create]
  resources :remember_tags, only: [:create, :update, :index, :show]
  resources :remembers, only: [:index, :show, :create, :update]
  resources :users, only: [:index, :show]
  resources :classrooms, only: [:index, :show]
  
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end
