require_dependency "<%= pluginFile %>/application_controller"

module <%= pluginTitle %>
  class <%= pluginTitle %>Controller < <%= pluginTitle %>::ApplicationController

    before_filter :authorize

    def index
      render '<%= pluginFile %>/layouts/application', :layout => false
    end

    def plugin
      render '<%= pluginFile %>/layouts/application', :layout => false, :anchor => '/<%= pluginDash %>'
    end
  end
end
