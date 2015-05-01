class CreateSlides < ActiveRecord::Migration
  def change
    create_table :slides do |t|
      t.boolean :active
      t.integer :order
      t.attachment :image

      t.timestamps
    end
  end
end
