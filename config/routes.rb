Rails.application.routes.draw do
  root :to => "home#index"
  devise_for :users

  get '/dashboard' => "users#welcome", as: :user_root
   authenticated :user do
    root to: 'users#welcome', as: :authenticated_root
  end


end
