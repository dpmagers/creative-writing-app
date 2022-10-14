class CreateClassrooms < ActiveRecord::Migration[7.0]
  def change
    create_table :classrooms do |t|
      t.string :class_name
      t.string :location
      t.string :meeting_times

      t.timestamps
    end
  end
end
