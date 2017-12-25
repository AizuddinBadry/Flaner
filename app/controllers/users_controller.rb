class UsersController < ApplicationController
	before_action :authenticate_user!

  def welcome
  	@user = current_user
  end

  def formIndex
    @forms = Form.page(params[:page]).per(10).where(user: current_user.id)
  end

  def newForm
  end

  private

  def xform_params
    params.require(:fields)
  end

end
