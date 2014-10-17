/**
 * Copyright <%= year %> Red Hat, Inc.
 *
 * This software is licensed to you under the GNU General Public
 * License as published by the Free Software Foundation; either version
 * 2 of the License (GPLv2) or (at your option) any later version.
 * There is NO WARRANTY for this software, express or implied,
 * including the implied warranties of MERCHANTABILITY,
 * NON-INFRINGEMENT, or FITNESS FOR A PARTICULAR PURPOSE. You should
 * have received a copy of GPLv2 along with this software; if not, see
 * http://www.gnu.org/licenses/old-licenses/gpl-2.0.txt.
 **/

$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "<%= module %>/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "<%= module %>"
  s.version     = <%= Module %>::VERSION
  s.authors     = ["TODO: authors"]
  s.email       = ["TODO: email"]
  s.homepage    = "TODO: homepage"
  s.summary     = "TODO: summary"
  s.description = "TODO: description"

  s.files = Dir["{app,config,db,lib}/**/*", "LICENSE", "Rakefile", "README.md"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails"

end
