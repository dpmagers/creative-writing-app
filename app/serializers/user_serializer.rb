class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :username, :is_instructor, :classroom_id, :classroom

  belongs_to :classroom

  # def classroom
  #   object.classroom
  # end 


end


# create_table "users", force: :cascade do |t|
#   t.string "username"
#   t.string "password_digest"
#   t.integer "classroom_id"
#   t.string "full_name"
#   t.boolean "is_instructor"