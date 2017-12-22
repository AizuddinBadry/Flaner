Rails.application.routes.draw do

  	root :to => "home#index"
  	devise_for :users
  	get '/dashboard' => "users#welcome", as: :user_root
  	get '/order/form' => "forms#index"

   	authenticated :user do
	    root to: 'users#welcome', as: :authenticated_root
	    # Product Module
	    get '/product' => "products#index"
	    get '/product/new' => "products#new"
	    post '/product/new' => "products#create"

	    # Form Module
	    get '/form' => "users#formIndex"
	    get '/form/new' => "users#newForm"
	    post '/form/new/product' => "users#xform"

	    # Sign out
	    delete '/users/sign_out' => "devise/sessions#destroy"
  	end

end
