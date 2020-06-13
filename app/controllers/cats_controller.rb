class CatsController < ApplicationController

  def index
    @cats = Cat.all
  end

  def show
    @cat = Cat.find(params[:id])
  end


  def newcat
    @new_cat = Cat.getcat[1]
    # binding.pry
    redirect_to cat_path(@new_cat.id)
  end

end
