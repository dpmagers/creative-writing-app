class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.integer :classroom_id
      t.string :full_name
      t.boolean :is_instructor

      t.timestamps
    end
  end
end
