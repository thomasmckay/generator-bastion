<%= pluginTitle %>::Engine.routes.draw do
  scope :<%= pluginFile %>, :path => '/<%= pluginDash %>' do
  end
end
