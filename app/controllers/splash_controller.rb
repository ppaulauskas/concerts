class SplashController < ApplicationController
  layout false

  def homesplash
  end
  
  def emailsubmit
      @emaillist = Emaillist.new(:email => params[:email])
      @emaillist.save
  end
  
end
