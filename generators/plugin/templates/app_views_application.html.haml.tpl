
= content_for(:bastion_javascripts) do
  = javascript_include_tag '<%= pluginTitle %>/<%= pluginDash %>'

= render :file => "bastion/layouts/application"
