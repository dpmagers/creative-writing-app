class RememberSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :set_to_private, :text
end


# create_table "remembers", force: :cascade do |t|
#   t.integer "user_id"
#   t.boolean "set_to_private"
#   t.string "text"