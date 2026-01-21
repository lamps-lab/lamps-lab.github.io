---
permalink: /downloads/
title: "Downloads" 
author_profile: true
---


<div class="download-grid">
  {% for item in site.downloads %}
    <div class="download-card">
      <h3>{{ item.title }}</h3>
      <div class="download-content">
        {{ item.content }}
      </div>
      {% if item.github_page %}
        <a href="{{ item.github_page }}">View on GitHub</a>
      {% endif %}
    </div>
  {% endfor %}
</div>