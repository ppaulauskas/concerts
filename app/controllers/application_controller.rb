class ApplicationController < ActionController::Base
  before_filter :date_set
  before_filter :events_get
  before_action :configure_permitted_parameters, if: :devise_controller?

  def events_get
    @events = Event.find(:all)
  end
  
  def date_set
    @d = Date.today.at_beginning_of_week
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) { |u| u.permit({ roles: [] }, :username, :email, :password, :password_confirmation) }
    devise_parameter_sanitizer.for(:login) { |u| u.permit({ roles: [] }, :username, :password) }
  end
  
  
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  include SessionsHelper
end
