require "bundler/setup"
require "jekyll/task/i18n"

Jekyll::Task::I18n.define do |task|
  # Set translate target locales.
  task.locales = ["en"]
  # Set all *.md texts as translate target contents.
  task.files = Rake::FileList["**/*.md", "**/*.html"]
  # Remove internal files from target contents.
  task.files -= Rake::FileList["_*/**/*.md", "_*/**/*.html", "google83da23d51a2bcf7d.html", "404.html", "companies/*/*"]
  # Remove translated files from target contents.
  task.locales.each do |locale|
    task.files -= Rake::FileList["#{locale}/**/*.md", "#{locale}/**/*.html"]
  end
end