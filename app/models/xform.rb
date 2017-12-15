class Xform
  	include Mongoid::Document
   	include Mongoid::Timestamps
   	

    field :name, :type => String
    field :user, :type => BSON::ObjectId     

    embeds_many :form_field
end
