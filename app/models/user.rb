class User < ApplicationRecord
    belongs_to :classroom
    has_many :remembers
    has_many :tags, through: :remembers


    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :classroom_id, presence: true
    # validates :is_instructor, presence: true
# the is_instructor validation is messing up my seeding bc it's reading "true" as boolean value instead of presence (i think)
end
