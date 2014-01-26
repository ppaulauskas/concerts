class BandsController < ApplicationController
  def star
    band = Band.find_by name: params[:name]
    rat = band.rating + 50
    band.update_attribute(:rating, rat)
  end
  
  def unstar
    band = Band.find_by name: params[:name]
    rat = band.rating - 50
    band.update_attribute(:rating, rat)
  end

  def remove
    band = Band.find_by name: params[:name]
    band.update_attribute(:rating, 0)
  end
end