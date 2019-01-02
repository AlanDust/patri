Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :artists, only: [:index, :create, :show] do
        resources :projects, only: [:index, :create, :show]
        resources :animals, only: [:index, :create, :show]
        resources :portraits, only: [:index, :create, :show]
        resources :music_inspirations, only: [:index, :create, :show]
        resources :cat_inspirations, only: [:index, :create, :show]
        resources :nature_inspirations, only: [:index, :create, :show]
        resources :art_history_inspirations, only: [:index, :create, :show]
      end
    end
  end

  get '/artists/:id', to: 'homes#index'
  get '/artists/:artist_id/portraits', to: 'homes#index'
  get '/artists/:artist_id/animals', to: 'homes#index'
  get '/artists/:artist_id/projects', to: 'homes#index'
  get '/artists/:artist_id/music_inspirations', to: 'homes#index'

end
