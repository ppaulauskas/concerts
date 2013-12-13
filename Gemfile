source 'https://rubygems.org'
ruby '1.9.3'
#ruby-gemset=railstutorial_rails_4_0

gem 'rails'
gem 'bootstrap-sass'
gem 'bcrypt-ruby'

group :development, :test do
  gem 'sqlite3'
  gem 'rspec-rails'
  gem 'guard-rspec'
  gem 'spork-rails', github: 'A-gen/spork-rails'
  gem 'guard-spork'
  gem 'childprocess'
  gem 'factory_girl_rails', '4.2.1'
end

group :test do
  gem 'selenium-webdriver'
  gem 'capybara'
  gem 'rb-notifu'
  gem 'wdm'
end

gem 'sass-rails'
gem 'uglifier'
gem 'coffee-rails'
gem 'jquery-rails'
gem 'turbolinks'
gem 'jbuilder'

group :doc do
  gem 'sdoc', require: false
end

group :production do
  gem 'pg', '0.15.1'
  gem 'rails_12factor', '0.0.2'
end