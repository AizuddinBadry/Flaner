class Form
  include Mongoid::Document
  Mongoid::Attributes::Dynamic
  field :title,   type: String
  field :description,   type: String
  field :user, type: BSON::ObjectId
  field :billplz, type: Boolean, default: false
  field :molpay, type: Boolean, default: false
  field :allowCDM, type: Boolean, default: false
  field :allowPartial, type: Boolean, default: false
  field :type, type: String
end
