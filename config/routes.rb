Rails.application.routes.draw do

  resources :payments
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
			
			# Payment Module
			get '/pay' => "payments#index"

	    #React API
			get '/api/user/product/list' => "products#user_product_list"
			get '/api/user/form/list' => "forms#get_form_list"
			post '/api/user/form/new' => "forms#create"

	    # Sign out
	    delete '/users/sign_out' => "devise/sessions#destroy"
  	end

end
