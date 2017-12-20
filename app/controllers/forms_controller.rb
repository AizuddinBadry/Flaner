class FormsController < ApplicationController
	layout 'form'
	def index
		@form = Xform.all.first
	end

end
