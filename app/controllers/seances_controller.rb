class SeancesController < ApplicationController
  before_action :set_training, only: [:create]
  before_action :set_seance, only: [:show, :create, :destroy]


  def index
    @seances = Seance.all
  end

  def show
    @completion = Completion.new
  end

  def create
  end

  def destroy
    @seance.destroy
  end

  private

  def set_seance
    @seance = Seance.find(params[:id])
  end

  def set_training
    @training = Training.find(params[:training_id])
  end
end
