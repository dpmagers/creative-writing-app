class AddLikesToRemembers < ActiveRecord::Migration[7.0]
  def change
    add_column :remembers, :likes, :integer
  end
end
