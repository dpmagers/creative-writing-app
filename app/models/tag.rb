class Tag < ApplicationRecord
    has_many :remember_tags, dependent: :destroy
    has_many :remembers, through: :remember_tags

    validates :name, presence: true, uniqueness: true
end
