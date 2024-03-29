# This is the config.rb file to support Upbase. Move this to your root folder after you bower install.

# Set this to the root of your project when deployed:
http_path = "/"

# And this is where compass will watch and compile stuff when it runs:
css_dir = "build/css/"
sass_dir = "src/scss"
images_dir = "img"
javascripts_dir = "src/js"
fonts_dir = "src/fonts"
relative_assets = true

# This line tells compass to look at the Upbase styles in your bower_components dir
add_import_path "components/Upbase/components"

line_comments = false
# output_style = :compact :compressed :nested :expanded
# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true