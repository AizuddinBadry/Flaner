class ProductsController < ApplicationController
	before_action :authenticate_user!

	def index
		@products = Product.page(params[:page]).per(10).where(user: current_user.id)
	end

	def new
	end

	def create
		@product = Product.new(product_params)
		if @product.save
			redirect_to '/form'
		else
		end
	end

	#React API Endpoint
	def user_product_list
		@products = Product.where(user: current_user).all
		render json: @products
	end
	
	private

	def product_params
		params.require(:product).permit(:user, :product_code, :name, :description, :type, :stock, :price, :comission, :partial_price)
	end
end
