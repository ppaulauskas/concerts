class ApplicationController < ActionController::Base
  before_filter :date_set
  
  def date_set
    @d = Date.today.at_beginning_of_week
  end
  
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  include SessionsHelper
end
