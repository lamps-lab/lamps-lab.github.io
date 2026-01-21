---
permalink: /projects/
title: "Projects" 
author_profile: true
---
<h1>My Projects</h1>
{% for project in site.data.projects %}
  <div class="project">
    <h2><a href="{{ project.link }}">{{ project.name }}</a></h2>
    <p>{{ project.description }}</p>
  </div>
{% endfor %}