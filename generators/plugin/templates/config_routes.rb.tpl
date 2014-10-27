<%= pluginTitle %>::Engine.routes.draw do

  match '/:<%= pluginFile %>_page/(*path)', :to => "<%= pluginTitle %>#index"
  match '/<%= pluginDash %>/(*path)', :to => "<%= pluginTitle %>#index_ie"

end
