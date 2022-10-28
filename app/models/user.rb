class User < ApplicationRecord
    has_secure_password

    belongs_to :classroom
    has_many :remembers
    has_many :tags, through: :remembers

    validates :username, presence: true, uniqueness: true
 
end

















    # has_many :remember_tags, through: :remembers

        # validates :classroom_id, presence: true
