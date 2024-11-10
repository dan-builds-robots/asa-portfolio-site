---
layout: doc
---

<script setup>
  import {data as projects} from './projects/project.data';
  import { withBase } from 'vitepress';
</script>

# Projects
<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 100%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}

li {
  list-style:none;
}
</style>

<ul v-if="projects.length > 0">
  <li v-for="project of projects">
   <div class="card">
    <div class="container">
      <a :href="withBase(project.url)">
          <h4><b>{{ project.frontmatter.title }}</b></h4> 
        </a>
          <p>{{project.frontmatter.description}}</p> 
      </div>
      </div>

    
  </li>
</ul>
<p v-else>
  Nothing here yet!
</p>
