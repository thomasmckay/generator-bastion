Foreman::Application.routes.draw do
  mount <%= pluginTitle %>::Engine, :at => '/', :as => '<%= pluginDash %>'
end
