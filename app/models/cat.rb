class Cat < ApplicationRecord
  require 'net/http'

  def self.getcat
    new_cat = ''
    cat_api_key = 'b2317756-052b-47b0-ac74-3b1b10313fa7'
    @resp = Faraday.get('https://api.thecatapi.com/v1/images/search?api_key=cat_api_key') do |req|
      req.headers['Content-Type'] = 'application/json'
    end
    JSON.parse(@resp.body).each do |r|
      new_cat = Cat.create(url: r["url"])
    end
    [@resp, new_cat]
  end
end
