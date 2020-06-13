Rails.application.routes.draw do
  resources :cats
  root 'home#index'

  get '/search', to: 'search#index'

  resources :apps, only: :show
  get '/newcat', to: 'cats#newcat'

  resources :cats
end
