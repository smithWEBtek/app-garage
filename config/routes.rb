Rails.application.routes.draw do
  resources :cats
  root 'home#index'

  get '/search', to: 'search#index'

  resources :apps, only: :show
  get '/getcat', to: 'cats#getcat'

  resources :cats
end
