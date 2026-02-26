<script lang="ts">
</script>

<nav class="title-bar">
  <section class="credits-area">
    <div class="about-logo">
      <img src="/sb-solver-logo.png" alt="logo" />
      <h3>Spelling Bee Solver</h3>
    </div>
    <ul class="about-options">
      <a href="https://www.nytimes.com/puzzles/spelling-bee" target="_blank"><span>NYT Spelling Bee</span></a>
      <a href="https://www.linkedin.com/in/nickraff/" target="_blank"><span>LinkedIn</span></a>
      <a href="https://github.com/NRaff/sb-solver" target="_blank"><span>Github</span></a>
      <a href="https://github.com/dwyl/english-words" target="_blank"><span>English Words</span></a>
    </ul>
  </section>

  <section class="info-area">
    <div class="info-icon">&#9432;</div>
    <div class="info-dropdown">
      <p>
        Use this tool to un-scramble letters in words.
        Add the required letter in the <strong>yellow</strong> space.
        Each character must be unique.
        Words displayed as a yellow <strong>pill</strong> use all letters provided.
      </p>
    </div>
  </section>
</nav>

<style>
  .title-bar {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    width: 100%;
    padding: 0.5em 0.75em;
    box-sizing: border-box;
  }

  .credits-area {
    position: relative;
    width: fit-content;
    padding-bottom: 5px;
  }

  .about-logo {
    display: flex;
    align-items: center;
    height: 100%;
    background-color: whitesmoke;
    border-radius: 5px;
    padding: 0.35em 0.5em;
    cursor: pointer;
    box-sizing: border-box;
  }

  h3 {
    margin-left: 0.5em;
    font-size: 0.75em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
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
    margin-top: 0;
    font-size: 0.5em;
    box-shadow: 0px 2px 6px 2px #0000001a;
    z-index: 20;
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
    box-shadow: inset 0 -2px 0 #f2db50;
  }

  /* Info icon + dropdown */
  .info-area {
    position: relative;
    display: flex;
    align-items: center;
    padding-bottom: 5px;
  }

  .info-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 1.5em;
    cursor: pointer;
    color: #555;
    line-height: 1;
    padding: 0 0.4em;
    border-radius: 5px;
    background-color: whitesmoke;
    box-sizing: border-box;
  }

  .info-icon:hover {
    box-shadow: inset 0 -2px 0 #f2db50;
  }

  .info-dropdown {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 0;
    width: 300px;
    background-color: whitesmoke;
    border-radius: 5px;
    padding: 0.75em;
    box-shadow: 0px 2px 6px 2px #0000001a;
    z-index: 20;
    line-height: 1.5em;
    font-size: 0.85em;
    text-align: left;
  }

  .info-dropdown strong {
    padding: 0.15em 0.3em;
    font-size: 0.8em;
    border-radius: 0.4em;
    text-transform: uppercase;
    background-color: #f2db50;
    font-weight: 700;
  }

  .info-area:hover .info-dropdown {
    display: block;
  }

  @media screen and (max-width: 800px) {
    .info-dropdown {
      width: 70vw;
    }
  }
</style>
