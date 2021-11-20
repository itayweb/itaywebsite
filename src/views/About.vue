<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Itay Adler</strong>, currently a Software Technician student<br/>
        I'm a passionate game developer, in particular gameplay programmer using Unity Engine, but I also love disucssing and developing apps and games in general.
      </div>

      <div style="margin-top: 20px;">I've worked on  <router-link to="/game-projects">games</router-link> to publish them or to showcase my capabilities using Unity Engine, on <router-link to="/other-projects">non-game development projects</router-link>.</div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for the next adventure</strong>. <br> You can reach me at <a href="mailto:itayadler13@gmail.com">itayadler13@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/fixedprofile.png" alt="Itay's Profile Photo"/> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>