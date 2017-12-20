class ProductsController < ApplicationController
	before_action :authenticate_user!

	def index
	end

	def new
		@product = Product.new
	end

	def create
		@product = Product.new(product_params)
		if @product.save
			redirect_to action: "index"
		else
		end
	end
	
	private

	def product_params
		params.require(:product).permit(:user, :product_code, :name, :description, :type, :stock, :price, :comission, :partial_price)
	end
end
