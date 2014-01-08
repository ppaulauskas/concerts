class BandsController < ApplicationController
  def show
    @band = Band.find(params[:id])
  end
  
  def index
    @bands = Band.paginate(page: params[:page])
  end
end