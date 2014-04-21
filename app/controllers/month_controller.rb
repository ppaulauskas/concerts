class MonthController < ApplicationController
  def home
  end
  
  def moreweek
    respond_to do |format|
      format.js
    end
  end
end
