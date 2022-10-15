class RememberSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :text

  has_many :tags
end


# create_table "remembers", force: :cascade do |t|
#   t.integer "user_id"
#   t.boolean "set_to_private"
#   t.string "text"