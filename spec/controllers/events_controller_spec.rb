require 'spec_helper'

describe EventsController do

  describe "GET 'star'" do
    it "returns http success" do
      get 'star'
      response.should be_success
    end
  end

  describe "GET 'remove'" do
    it "returns http success" do
      get 'remove'
      response.should be_success
    end
  end

end
