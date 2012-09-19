module Jekyll
  class SpeakerIndex < Page
    def initialize(site, base, dir)
      @site = site
      @base = base
      @dir  = dir
      @name = "index.html"

      self.read_yaml(File.join(base, '_layouts'), 'speaker.html')
      self.data['speaker'] = self.get_speaker(site)
      self.process(@name)
    end

    def get_speaker(site)
      {}.tap do |speaker|
        Dir['_speaker/*.yml'].each do |path|
          name   = File.basename(path, '.yml')
          config = YAML.load(File.read(File.join(@base, path)))
          type   = config['type']

          if config['active']
            speaker[type] = {} if speaker[type].nil?
            speaker[type][name] = config
          end
        end
      end
    end
  end

  class PersonIndex < Page
    def initialize(site, base, dir, path)
      @site     = site
      @base     = base
      @dir      = dir
      @name     = "index.html"
      self.data = YAML.load(File.read(File.join(@base, path)))
      self.data['title'] = "#{self.data['name']} | #{self.data['role']}"

      self.process(@name)
    end
  end

  class GenerateSpeaker < Generator
    safe true
    priority :normal

    def generate(site)
      write_speaker(site)
    end

    # Loops through the list of speaker pages and processes each one.
    def write_speaker(site)
      if Dir.exists?('_speaker')
        Dir.chdir('_speaker')
        Dir["*.yml"].each do |path|
          name = File.basename(path, '.yml')
          self.write_person_index(site, "_speaker/#{path}", name)
        end

        Dir.chdir(site.source)
        self.write_speaker_index(site)
      end
    end

    def write_speaker_index(site)
      speaker = SpeakerIndex.new(site, site.source, "/speaker")
      speaker.render(site.layouts, site.site_payload)
      speaker.write(site.dest)

      site.pages << speaker
      site.static_files << speaker
    end

    def write_person_index(site, path, name)
      person = PersonIndex.new(site, site.source, "/speaker/#{name}", path)

      if person.data['active']
        person.render(site.layouts, site.site_payload)
        person.write(site.dest)

        site.pages << person
        site.static_files << person
      end
    end
  end
end