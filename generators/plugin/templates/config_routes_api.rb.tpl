<%= Module %>::Engine.routes.draw do
  scope :<%= module %>, :path => '/<%= module %>' do
  end
end
