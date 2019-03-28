class RecipesController<ApplicationController

  def index
    @recipes=Recipe.all
    render json: @recipes
  end

  def show
    @recipe=Recipe.find(params[:id])
    render json: @recipe
  end

  def create
    @recipe=Recipe.create(recipe_params)
    render json: @recipe
  end

  def destroy
    @recipe=Recipe.find(params[:id]).destroy
    render json: {result:"Success"}
  end

  def update
    @recipe=Recipe.find(params[:id])
    @recipe.update(name: params[:name],description: params[:description])
    render json: {result: "Updated"}
  end

private
  def recipe_params
    params.require(:recipe).permit(:name,:description)
  end
end
