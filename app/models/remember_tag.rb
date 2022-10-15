class RememberTag < ApplicationRecord
    belongs_to :remember
    belongs_to :tag

    validates :remember_id, presence: true
    validates :tag_id, presence: true

end
