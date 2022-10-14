class Tag < ApplicationRecord
    has_many :remember_tags
    has_many :remembers, through: :remember_tags

    # validates :name, presence: true, uniqueness: true
end
