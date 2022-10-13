class CreateRemembers < ActiveRecord::Migration[7.0]
  def change
    create_table :remembers do |t|
      t.integer :user_id
      t.boolean :set_to_private
      t.string :text

      t.timestamps
    end
  end
end

