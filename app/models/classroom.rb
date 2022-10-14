class Classroom < ApplicationRecord
    has_many :users
    has_many :remembers, through: :users

    # has_many tags, through: :users

end
