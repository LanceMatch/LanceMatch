desc "Build site"
task :build do
  system "jekyll build"
end
task :optimize_build do
  system "gulp"
end

desc "Deploy the app to s3"
task :deploy do
  Rake::Task["build"].invoke
  system("s3_website push")
end
