class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :username, :is_instructor, :classroom_id, :classroom

  belongs_to :classroom
  has_many :remembers, serializer: RememberSerializer




end

