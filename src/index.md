---
layout: base.njk
title: Home
---

<div class="home">


  <section class="about">
    <h2>About These webpage</h2>
    <p>
      Welcome to the Thorium Reader Conformance Reports! Here you'll find detailed assessments of how Thorium Reader 
      stacks up against important web standards and accessibility guidelines. Whether you're a developer, accessibility 
      specialist, or just curious about Thorium Reader's capabilities, these reports break down exactly what features 
      are implemented, tested, and ready to use.
    </p>
    <p>
      We evaluate Thorium Reader across multiple frameworks including the W3C EPUB Reading System specification, 
      Web Sustainability Guidelines, WCAG accessibility standards, and user agent accessibility guidelines. Each report 
      includes detailed results, implementation notes, and information about what's being worked on next.
    </p>
  </section>
  </section> 
  <section class="platforms-overview">
    <h2>Available Platforms</h2>
    <div class="platform-cards">
      {% set platformOrder = ['desktop3', 'desktop4', 'web', 'ios', 'android'] %}
      {% for key in platformOrder %}
        {% set platform = site.platforms[key] %}
        {% if platform %}
      <div class="platform-card {{ platform.status }}">
        <h3><a href="/documents/{{ key }}" >{{ platform.name }}</a></h3>
        <p>{{ platform.description }}</p>
        {% if platform.status == "coming-soon" or platform.status == "Coming Soon" %}
          <p class="coming-soon-text">Coming Soon</p>
        {% elif platform.status == "beta" %}
        {% if platform.info %}
        <ul class="inline-list">
          <li><a href="{{ platform.info }}" class="btn" target="_blank">ℹ️ Learn More</a></li>
        </ul>
        {% endif %}
        {% else %}
        <ul class="inline-list">
          <li><a href="/documents/{{ key }}/technical-spec/" class="btn">⚙️ Technical Spec</a></li>
          <li><a href="/documents/{{ key }}/privacy-policy/" class="btn">🔐 Privacy Policy</a></li>
          <li><a href="/documents/{{ key }}/terms-of-use/" class="btn">📄 Terms of Use</a></li>
          <li><a href="/documents/{{ key }}/accessibility-report/" class="btn">📋 Accessibility Report</a></li>
          {% if platform.info %}<li><a href="{{ platform.info }}" class="btn" target="_blank">ℹ️ Learn More</a></li>{% endif %}
          <!-- <li><a href="/documents/{{ key }}/epub-rs-report/" class="btn">📚 EPUB Reading System 3.4</a></li> -->
          <!-- <li><a href="/documents/{{ key }}/wsg-report/" class="btn">🌱 Web Sustainability Guidelines</a></li> -->
        </ul>
        {% endif %}
        </div>
      </div>
        {% endif %}
      {% endfor %}
    </div>
  </section>

</div>
