class App < ApplicationRecord
  def viewed_at
    Time.now.to_s
  end

  def current_cat
    # use the following URL in a Faraday request / response object:
    # https://api.thecatapi.com/v1/images/search?x-api-key=b2317756-052b-47b0-ac74-3b1b10313fa7
  end
end
