class Remember < ApplicationRecord
    belongs_to :user
    has_many :remember_tags, dependent: :destroy
    has_many :tags, through: :remember_tags

    validates :text, presence: true


end
