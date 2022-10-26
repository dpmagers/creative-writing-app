class RememberTagSerializer < ActiveModel::Serializer
  attributes :id, :remember_id, :tag_id, :name

  def name
    object.tag.name
  end 

  belongs_to :tag
end


