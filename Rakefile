desc "Build site"
task :build do
  Rake::Task['optimize_images'].invoke
  system "rm -rf _site/"
  system "jekyll build"
end

desc "Optimize"
task :optimize_images do
  require 'image_optim'
  image_optim = ImageOptim.new(svgo: false, allow_lossy: true, :pngout => false)
  image_optim.optimize_images!(Dir['_assets/images/**/*.png'] + Dir['_assets/images/**/*.jpg'])
end

desc "Deploy the app to s3"
task :deploy do
  Rake::Task["build"].invoke
  system("s3_website push")
end
