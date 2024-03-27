---
layout: default
title: Syntax
---

{% raw %}
{% capture toc %}
{% endcapture %}

{% assign lines = content | newline_to_br | split: '<br />' %}

{% for line in lines %}
  {% if line contains '## ' or line contains '### ' %}
    {% assign headerLevel = line | slice: 0, 3 | remove: '#' | size %}
    {% assign headerText = line | replace: '#', '' | strip_newlines %}
    {% capture anchor %}{{ headerText | downcase | replace: ' ', '-' }}{% endcapture %}

    {% capture toc %}{{ toc }}
      <a href="#{{ anchor }}" style="display: block; margin-left: {{ headerLevel | minus: 2 | times: 20 }}px;">{{ headerText }}</a>
    {% endcapture %}

    {{ line | replace: '## ', '<h2 id="' | replace: '### ', '<h3 id="' | append: '">' }}
  {% else %}
    {{ line }}
  {% endif %}
{% endfor %}

<div id="toc">
  <h2>Table of Contents</h2>
  {{ toc }}
</div>

{{ content }}
{% endraw %}

# Syntax

## Introduction

This is the introduction to syntax.

## Basic Concepts

Here are some basic concepts in syntax.

### Constituent Structure

Explanation of constituent structure.

### Grammatical Categories

Explanation of grammatical categories.

## Advanced Topics

Here are some advanced topics in syntax.

### Transformations

Explanation of transformations.

### Constraints

Explanation of constraints.