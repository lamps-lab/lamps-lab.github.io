---
permalink: /people/
title: "People"
author_profile: true
classes: "people-page" 
---

<h2 class="people-section-title">Faculty</h2>

<div class="people-grid faculty-grid">
    {% for person in site.data.people.faculty %}
    <div class="person-card">

      <img src="/images/people/{{ person.image }}" alt="{{ person.name }}">

      <h3>{{ person.name }}</h3>
      <p class="person-role">{{ person.title }}</p>
      <p class="person-interests">{{ person.interests }}</p>

      {% if person.links %}
      <div class="person-links">
        {% for link in person.links %}
          <a href="{{ link.url }}" target="_blank" rel="noopener">
            <i class="fas fa-{{ link.icon }}"></i>
          </a>
        {% endfor %}
      </div>
      {% endif %}

    </div>
  {% endfor %}
</div>

<h2 class="people-section-title">Phd Students</h2>
<div class = "people-grid">
    {% for person in site.data.people.phd_students%}
    <div class = "person-card">

        <img src = "/images/people/{{person.image}}" alt = "{{person.name}}">
        <h3>{{person.name}}</h3>
        <p class="person-interests">{{ person.interests }}</p>
              {% if person.links %}
      <div class="person-links">
        {% for link in person.links %}
          <a href="{{ link.url }}" target="_blank" rel="noopener">
            <i class="fas fa-{{ link.icon }}"></i>
          </a>
        {% endfor %}
      </div>
      {% endif %}

    </div>
  {% endfor %}
</div>


<h2 class="people-section-title">Masters Students</h2>
<div class = "people-grid">
    {% for person in site.data.people.masters_students%}
    <div class = "person-card">

        <img src = "/images/people/{{person.image}}" alt = "{{person.name}}">
        <h3>{{person.name}}</h3>
        <p class="person-interests">{{ person.interests }}</p>
              {% if person.links %}
      <div class="person-links">
        {% for link in person.links %}
          <a href="{{ link.url }}" target="_blank" rel="noopener">
            <i class="fas fa-{{ link.icon }}"></i>
          </a>
        {% endfor %}
      </div>
      {% endif %}

    </div>
  {% endfor %}
</div>