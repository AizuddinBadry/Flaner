Rails.application.routes.draw do

  	root :to => "home#index"
  	devise_for :users
  	get '/dashboard' => "users#welcome", as: :user_root
  	get '/order/form' => "forms#index"

   	authenticated :user do
	    root to: 'users#welcome', as: :authenticated_root
	    get '/form' => "users#formIndex"
	    get '/form/new' => "users#newForm"
	    post '/form/new/product' => "users#xform"
	    delete '/users/sign_out' => "devise/sessions#destroy"
  	end

end
