Foreman::Application.routes.draw do

  scope :<%= module %>, :module => :<%= module %> do
    match '/<%= module %>' => '<%= module %>#plugin', :via => :get
  end

end
