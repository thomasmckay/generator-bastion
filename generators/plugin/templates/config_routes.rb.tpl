<%= Module %>::Engine.routes.draw do

  match '/:<%= module %>_page/(*path)', :to => "<%= module %>#index"
  match '/<%= module %>/(*path)', :to => "<%= module %>#index_ie"

end
