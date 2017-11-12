module CustomHelpers

  def code_segment(code)
    # blue
    code.gsub! '<bl>',  '<span class="text-blue text-darken-2">'
    code.gsub! '</bl>', '</span>'

    # comment
    code.gsub! '<c>',  '<span class="text-grey text-darken-1">// '
    code.gsub! '</c>', '</span>'

    # light blue
    code.gsub! '<lb>',  '<span class="text-blue text-lighten-2">'
    code.gsub! '</lb>', '</span>'

    # orange
    code.gsub! '<o>',  '<span class="text-orange text-darken-3">'
    code.gsub! '</o>', '</span>'

    # purple
    code.gsub! '<p>',  '<span class="text-purple text-darken-2">'
    code.gsub! '</p>', '</span>'

    # red
    code.gsub! '<r>',  '<span class="text-red text-darken-2">'
    code.gsub! '</r>', '</span>'

    # strings
    code.gsub! '<s>',  '<span class="text-teal text-darken-2">"'
    code.gsub! '</s>', '"</span>'

    "<div class='ui code segment mt-0'>" +
      "<a class='ui label'>Copy</a>" +
      "<pre class='m-0 p-0'><code>#{code}</code></pre>" +
    "</div>"
  end

  def color(str)
    # blue
    str.gsub! '<bl>',  '<span class="text-blue text-darken-2">'
    str.gsub! '</bl>', '</span>'

    # orange
    str.gsub! '<o>',  '<span class="text-orange text-darken-3">'
    str.gsub! '</o>', '</span>'

    # purple
    str.gsub! '<p>',  '<span class="text-purple text-darken-2">'
    str.gsub! '</p>', '</span>'

    # red
    str.gsub! '<r>',  '<span class="text-red text-darken-2">'
    str.gsub! '</r>', '</span>'

    # strings
    str.gsub! '<s>',  '<span class="text-teal text-darken-2">"'
    str.gsub! '</s>', '"</span>'

    str
  end
end