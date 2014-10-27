require File.expand_path("../engine", File.dirname(__FILE__))

namespace :<%= pluginFile %> do

  desc "Runs Rubocop style checker on <%= pluginTitle %> code"
  task :rubocop do
    system("cd #{<%= pluginTitle %>::Engine.root} && bundle exec rubocop")
  end

  desc "Runs Rubocop style checker with xml output for Jenkins"
  task 'rubocop:jenkins' do
    system("cd #{<%= pluginTitle %>::Engine.root} && bundle exec rubocop \
            --require rubocop/formatter/checkstyle_formatter \
            --format RuboCop::Formatter::CheckstyleFormatter \
            --no-color --out rubocop.xml")
    exit($?.exitstatus)
  end

end
