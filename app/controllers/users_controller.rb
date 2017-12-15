class UsersController < ApplicationController
	before_action :authenticate_user!

  def welcome
  	@user = current_user
  end

  def formIndex
    @user = current_user
    @form = Xform.all.first
  end

  def xform
   form = Xform.new(:name=>'test form',:user => current_user.id)
   form.form_field << FormField.new(:name => @test.name,:kind=> @test.kind, :value => @test.value)
   if form.save
   		render json: form
   else
   end
  end
end
