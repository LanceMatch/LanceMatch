desc "Build site"
task :build do |task, args|
  system "jekyll build"
end

desc "Deploy the app to s3"
task :deploy do
  Rake::Task["build"].invoke
  system("s3_website push")
end
