class RememberSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :text, :set_to_private, :remember_tags, :created_at, :updated_at

  has_many :tags
  has_many :remember_tags
end

