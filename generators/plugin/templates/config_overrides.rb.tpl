Foreman::Application.routes.draw do

  scope :<%= pluginTitle %>, :module => :<%= pluginTitle %> do
    match '/<%= pluginDash %>' => '<%= pluginTitle %>#plugin', :via => :get
  end

end
