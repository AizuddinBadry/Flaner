class UsersController < ApplicationController
	before_action :authenticate_user!

  def welcome
  	@user = current_user
  	@hello_world_props = { name: "Stranger" }
  end

end
