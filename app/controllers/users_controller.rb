class UsersController < ApplicationController
	before_action :authenticate_user!

  def welcome
  	@user = current_user
  end

  def formIndex
    @user = current_user
  end

  def newForm
    @user = current_user
  end

  def xform
    @name_add = ['aizuddin', 'azihan']
    @kind_add = ['Text', 'Email']
    @value = ['aizuddin', 'azihan']
   form = Xform.new(:name=>'test form',:user => current_user.id)
   form.form_field << FormField.new(:name => @name_add,:kind=> @kind_add, :value => @value)
   if form.save
   		render json: form
   else
   end
  end

  private

  def xform_params
    params.require(:fields)
  end

end
