class Product
  include Mongoid::Document
  field :user, :type => BSON::ObjectId 
  field :product_code,   type: String
  field :name,   type: String
  field :description,   type: String
  field :type,   type: String
  field :stock,   type: Integer
  field :price,   type: Integer
  field :comission,   type: Integer
  field :partial_price,   type: Integer
end
