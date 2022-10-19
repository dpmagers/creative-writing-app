class RemoveLikesFromRemembers < ActiveRecord::Migration[7.0]
  def change
    remove_column :remembers, :likes, :integer
  end
end
