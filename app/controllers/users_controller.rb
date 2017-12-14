class UsersController < ApplicationController
before_action :authenticate_user!
  def welcome
  	@user = User.all.first
  end

  def form
  end

end
