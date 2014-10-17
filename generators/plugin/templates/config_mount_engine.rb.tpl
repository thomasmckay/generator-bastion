Foreman::Application.routes.draw do
  mount <%= Module %>::Engine, :at => '/', :as => '<%= module %>'
end
