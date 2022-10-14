class ClassroomUsersSerializer < ActiveModel::Serializer
  attributes :id, :class_name, :location, :meeting_times

  has_many :users
end
