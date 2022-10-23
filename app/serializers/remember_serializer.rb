class RememberSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :text, :remember_tags, :created_at, :updated_at

  has_many :tags
  has_many :remember_tags
end


# create_table "remembers", force: :cascade do |t|
#   t.integer "user_id"
#   t.boolean "set_to_private"
#   t.string "text"