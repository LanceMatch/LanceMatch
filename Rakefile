desc "Build site"
task :build do
  Rake::Task["optimize_images"].invoke
  system "jekyll build"
end

desc "Optimize"
task :optimize_images do
  require 'image_optim'
  image_optim = ImageOptim.new(svgo: false, allow_lossy: true)
  image_optim.optimize_images!(Dir['_assets/images/**/*.png'] + Dir['_assets/images/**/*.jpg'])
end

task :uncss do
  #optimize css
  system "gulp" #uncss (remove extra css stuff)
  system "cp _uncss/* _assets/stylesheets"
end

desc "Deploy the app to s3"
task :deploy do
  Rake::Task["build"].invoke
  system("s3_website push")
end
