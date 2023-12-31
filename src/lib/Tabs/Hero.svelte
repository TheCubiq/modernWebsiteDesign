<script>

    import MaskedImage from "../MaskedImage.svelte";
    import { MapPin } from 'lucide-svelte';
</script>


<section id="hero" class="mask">

    <article class="mask">
        <span>
            <MapPin size="1em" />
            Japan
        </span>
        <!-- the "E" looks better that "e" xd -->
        <h1>FEs-tival</h1>
        <h2>Of the Year</h2>
    </article>

</section>

<style>

    section {
        grid-column: 1/3;
        grid-row: 1/7;

        
        background-image: url("https://i.imgur.com/7JQsjw1.png");
        background-size: 100%;
        background-position: center;

        display: flex;
        align-items: flex-end;
        justify-content: flex-start;

        text-align: center;

        padding: calc(var(--card-padding) + 1rem); 
        /* padding-inline-end: 0; */

        /* scale: 1.17; */

        
        min-width: min-content;
        
        z-index: 2;
        
        /* padding-inline: 5em; */
        
        margin-left: -10%;
        margin-bottom: -10%;
        /* padding-inline-end: 10rem; */
        
        transform-origin: right top;

        transition: .3s;
    }
    
    section:hover {
        
        background-size: 110%;
        margin-left: -5%;
        margin-bottom: -5%;
    }

    article {
        background: white;
        /* height: 50%;
        width: 60%; */

        color: black;

        display: flex;
        flex-direction: column;
        justify-content: center;
        /* align-items: center; */


        padding-inline: calc(var(--card-padding) * 1.3);
        /* padding-inline-end: 20%; */
        padding-block: 1.5em;

        /* overflow: clip; */
        max-width:min-content;

    }
    
    article > *{
        text-align: start;
    }


    h1 {
        font-family: "Bento";
        font-weight: normal;
        font-style: normal;

        /* word-wrap: break-word; */


        line-height: .7;
        font-size: 6rem;
        font-weight: 800;
        color: #333;
    }

    h2 {
        font-weight: 400;
        color: #000;
    }

    span {
        color: #000;
        font-size: 1.3rem;
        display: flex;
        align-items: center;
    }
</style>