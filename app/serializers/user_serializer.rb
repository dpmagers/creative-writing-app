class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :full_name, :classroom_id, :is_instructor
end


# create_table "users", force: :cascade do |t|
#   t.string "username"
#   t.string "password_digest"
#   t.integer "classroom_id"
#   t.string "full_name"
#   t.boolean "is_instructor"