require 'json'
require 'fileutils'

module Jekyll
  class EntriesJsonGenerator < Generator
    priority :low

    def generate(site)
      site.config['entries_json_path'] = 'entries.json' if !site.config['entries_json_path']

      # Ensure the _site directory exists
      destination_dir = File.join(site.config['destination'])
      FileUtils.mkdir_p(destination_dir)

      json_file_path = File.join(destination_dir, site.config['entries_json_path'])
      json_file = File.new(json_file_path, 'w')

      entries = []

      site.collections['entries'].docs.each do |entry|
        entries << {
          :date => entry.data['date'],
          :url => entry.url,
          :title => entry.data['title'],
          :excerpt => entry.data['excerpt'],
          :tags => entry.data['tags']
        } if entry.published?
      end

      json_file.write(entries.to_json)
      json_file.close

      site.static_files << Jekyll::JsonFile.new(site, destination_dir, "/", site.config['entries_json_path'])
    end
  end

  class JsonFile < StaticFile
    def write(dest)
      begin
        super(dest)
      rescue
      end

      true
    end
  end

  class EntriesJsonTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
    end

    def render(context)
      IO.read(File.join(context.registers[:site].config['destination'], context.registers[:site].config['entries_json_path']))
    end
  end
end

Liquid::Template.register_tag('entries_json', Jekyll::EntriesJsonTag)
