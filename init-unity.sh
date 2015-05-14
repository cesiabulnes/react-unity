#!/usr/bin/env ruby

def cp(src, dest, app_name)
  if File.directory?(src)
    Dir.mkdir(dest) unless Dir.exists?(dest)
  else
    content = File.read(src)
      .gsub("SampleEditorApp", app_name)
      .gsub("Examples/#{app_name}/", "")
      .gsub("../../Libraries-unity/", "node_modules/react-unity/Libraries-unity/")
      #.gsub("../../React/", "node_modules/react-unity/React/")
    File.write(dest, content)
  end
end

def main(dest, app_name)
  source = File.expand_path("../Examples/SampleEditorApp", __FILE__)
  files = Dir.chdir(source) { Dir["**/*"] }
    .each { |file|
      new_file = file
        .gsub("SampleEditorApp", app_name)
        .gsub(/^_/, ".")
      cp File.join(source, file), File.join(dest, new_file), app_name
    }
end

if ARGV.count == 0
  puts "Usage: #{__FILE__} <ProjectNameInCamelCase>"
  puts ""
  puts "This script will bootstrap new React Unity app in current folder"
else
  app_name = ARGV.first
  dest = Dir.pwd
  puts "Setting up new React Unity app in #{dest}"
  puts ""

  main(dest, app_name)

  puts "Next steps:"
  puts ""
  puts "   Open any project in Unity"
  puts "   Profit!"
  puts ""
end
