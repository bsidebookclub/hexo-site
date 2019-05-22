title: About
date: 2019-05-21 11:16:05
---
<div class="textleft">

# About Us{.center}

![](/img/bsidebytheseaside.jpg){.full-width}

Established in 2015, B-Side Book Club A Cappella emerged from a group of close-knit friends who all shared a love for singing. All of the group members participated in collegiate A Cappella during their undergrad and wanted to continue singing together beyond graduation. Since our first meeting around a dining room table, we have performed in multiple venues throughout Portland, collaborated with other A Cappella groups, and become a recognized non-profit organization.

Through it all, our mission has been unwavering; to creatively produce music that is enjoyable, beautiful, and meaningful. B-Side Book Club has been a place of solace, creativity, and musical inspiration for all of its members. We all get a lot of joy from this group, and we love being able to share our music with other people. Interested in hearing us? Listen to our music, catch us at our next show, or contact us for more information.

B-Side Book Club operates with a nominated board, composed of members that are dedicated to our mission. They are responsible for our financial health and growth. We are committed to transparency and accessibility - If you would like to learn more about us please [contact us](/contact/).

#### Adriana Hernandez — Music Director
#### Mason Wordell — Secretary
#### Alison Noe — Treasurer


<div id="bsidevue">
<section>

# Our Members

<div class="center">
  <div v-for="member in members">
  
  ![](){.z-depth-2 .memberImage :src="member.image" v-bind:alt="member.desc"}

  </div>
</div>
 
</section>
<section>
	
# Alumni
With people always on the move, B-side is always changing. Here are our past members who will forever be a part of the Book Club family:

<p cass="center" style="column-count:3">
  <span v-for="alum in alumni"><i v-html="alum"></i><br /></span>
</p>    
</section>

</div>

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="/js/bsidemembers.js"></script>