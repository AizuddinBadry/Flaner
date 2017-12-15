class FormField
  include Mongoid::Document
  include Mongoid::Attributes::Dynamic

    field :name, :type => String
    field :kind, :type => String
  	embedded_in :xform
end
