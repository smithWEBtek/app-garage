class CatsController < ApplicationController

  def index
    @cats = Cat.all
  end

  def show
    @cat = Cat.find(params[:id])
  end


  def getcat
    @new_cat = Cat.getcat
    # binding.pry
    redirect_to cat_path(@new_cat)
  end

end
