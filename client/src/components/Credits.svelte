<script lang="ts">
</script>

<section class="credits-area">
  <div class="about-logo">
    <img src="/sb-solver-logo.png" alt="logo" />
    <h3>About</h3>
  </div>
  <ul class="about-options">
    <a href="https://www.nytimes.com/puzzles/spelling-bee" target="_blank"><span>NYT Spelling Bee</span></a>
    <a href="https://www.linkedin.com/in/nickraff/" target="_blank"><span>LinkedIn</span></a>
    <a href="https://github.com/NRaff/sb-solver" target="_blank"><span>Github</span></a>
    <a href="https://github.com/dwyl/english-words" target="_blank"><span>English Words</span></a>
  </ul>
</section>

<style>
  .credits-area {
    position: absolute;
    top: 0.25em;
    left: 0.5em;
    height: 2em;
    width: fit-content;
  }

  .about-logo {
    display: flex;
    align-items: center;
    justify-content: left;
    background-color: whitesmoke;
    border-radius: 5px;
    padding: 0.25em;
  }

  h3 {
    margin-left: 0.25em;
    font-size: 0.75em;
  }

  img {
    height: 35px;
    aspect-ratio: 1;
    width: auto;
  }

  .about-options {
    display: none;
    position: absolute;
    align-items: center;
    justify-content: left;
    background-color: whitesmoke;
    border-radius: 5px;
    padding: 0px;
    width: max-content;
    margin-top: 5px;
    font-size: 0.5em;
    box-shadow: 0px 2px 6px 2px #0000001a;
  }

  a {
    text-decoration: none;
    color: black;
    text-align: left;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 100%;
  }

  a:hover {
    border-bottom: 2px solid #f2db50;
    cursor: pointer;
  }

  a:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  a span {
    padding: 0.5em;
  }

  .credits-area:hover .about-options {
    display: flex;
    flex-direction: column;
  }

  .credits-area:hover .about-logo {
    border-bottom: 2px solid #f2db50;
  }

  @media screen and (max-width: 800px) {
    .credits-area {
      position: relative;
      width: stretch;
      margin-right: 3vw;
      margin-left: 3vw;
      margin-bottom: -0.5em;
      top: auto;
      left: auto;
      right: auto;
    }

    .about-options {
      width: 100%;
    }
  }
</style>
