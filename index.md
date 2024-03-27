---
layout: default
title: Home
---

## Entries:

<ul>
  {% for entry in site.pages %}
    {% if entry.dir == '/entries/' %}
      <li><a href="{{ entry.url | relative_url }}">{{ entry.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>