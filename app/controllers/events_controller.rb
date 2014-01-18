class EventsController < ApplicationController

  def star
    event = Event.find(params[:id])
    event.update_attribute(:rating, 9)
  end

  def remove
    event = Event.find(params[:id])
    event.update_attribute(:rating, 0)
  end

end
