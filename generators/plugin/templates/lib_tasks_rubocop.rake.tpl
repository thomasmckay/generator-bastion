require File.expand_path("../engine", File.dirname(__FILE__))

namespace :<%= module %> do

  desc "Runs Rubocop style checker on <%= Module %> code"
  task :rubocop do
    system("cd #{<%= Module %>::Engine.root} && bundle exec rubocop")
  end

  desc "Runs Rubocop style checker with xml output for Jenkins"
  task 'rubocop:jenkins' do
    system("cd #{<%= Module %>::Engine.root} && bundle exec rubocop \
            --require rubocop/formatter/checkstyle_formatter \
            --format RuboCop::Formatter::CheckstyleFormatter \
            --no-color --out rubocop.xml")
    exit($?.exitstatus)
  end

end
