Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :artists, only: [:index, :create, :show] do
        resources :paintings, only: [:index, :create, :show]
        resources :drawings, only: [:index, :create, :show]
        resources :bottles, only: [:index, :create, :show]
      end
    end
  end
  get '/artists', to: 'homes#index'
  get '/artists/:id', to: 'homes#index'
  get '/artists/:artist_id/bottles', to: 'homes#index'
  get '/artists/:artist_id/drawings', to: 'homes#index'
  get '/artists/:artist_id/paintings', to: 'homes#index'

end
