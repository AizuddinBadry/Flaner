class FormsController < ApplicationController
	skip_before_action :verify_authenticity_token, :only => [:create]
	layout 'form'
	def index
		@form = Xform.all.first
	end

	#API endpoint
	def create
		@forms = Form.new(form_params)
		if @forms.save
			@forms.update(user: current_user.id)
			@product = params[:products].inject([]) do |products, action|
			products << ProductForm.create!(productID: action[:productID], formID: @forms.id)
			end
			render json: @forms
		else
		end
	end

	def get_form_list
		@forms = Form.where(user: current_user.id).all
		render json: @forms
	end

	private

	def form_params
		params.permit(:title, :form, :description, :productID, :type, :url)
	end

end
