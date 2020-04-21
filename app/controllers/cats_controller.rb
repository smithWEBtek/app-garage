class CatsController < ApplicationController

  def index
    @cats = Cat.all
    respond_to do |f|
      f.html
      f.json { render :json => @cats }
    end
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
