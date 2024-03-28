# module Jekyll
#     class GlossedExampleTag < Liquid::Block
#       def render(context)
#         lines = super.split("\n").map(&:strip)
#         example = lines[0..-2].map.with_index do |line, index|
#           "<div class=\"gloss-line\">#{line.split.map { |word| "<span>#{word}</span>" }.join(' ')}</div>"
#         end.join("\n")
  
#         translation = "<div class=\"translation\">#{lines.last}</div>"
  
#         "<div class=\"glossed-example\">\n<div class=\"gloss\">#{example}</div>\n#{translation}\n</div>"
#       end
#     end
#   end
  
#   Liquid::Template.register_tag('glossed_example', Jekyll::GlossedExampleTag)

module Jekyll
    class GlossedExampleTag < Liquid::Block
      def render(context)
        lines = super.split("\n").map(&:strip)
        example = lines.map.with_index do |line, index|
          "<p>#{line.split.map { |word| "<span>#{word}</span>" }.join(' ')}</p>"
        end.join("\n")
  
        "<div class=\"glossed-example\">\n#{example}\n</div>"
      end
    end
  end
  
  Liquid::Template.register_tag('glossed_example', Jekyll::GlossedExampleTag)