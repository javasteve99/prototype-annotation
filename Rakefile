desc 'Watch Sass/Bourbon files'
task :server do
  puts "Watching Sass/Bourbon files."
  sassPid = Process.spawn('sass --watch css/sass:css')

  trap("INT") {
    [sassPid].each { |pid| Process.kill(9, pid) rescue Errno::ESRCH }
    exit 0
  }

  [sassPid].each { |pid| Process.wait(pid) }
end
