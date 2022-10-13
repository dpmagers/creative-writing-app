class CreateRememberTags < ActiveRecord::Migration[7.0]
  def change
    create_table :remember_tags do |t|
      t.integer :remember_id
      t.integer :tag_id

      t.timestamps
    end
  end
end
