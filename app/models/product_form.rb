class ProductForm
  include Mongoid::Document
  include Mongoid::Attributes::Dynamic
  include Mongoid::Timestamps

  field :productID,   type: String
  field :formID, type: BSON::ObjectId

end
