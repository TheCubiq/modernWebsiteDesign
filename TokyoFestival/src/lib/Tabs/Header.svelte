<script>
    import { Bell, BookText, CalendarDays, Coffee, Command, LayoutDashboard } from "lucide-svelte";
</script>

<header>

    <!-- logo -->
    <svg
        height="2em"
        viewBox="0 0 48 33"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M9.59279 32.8232C4.79719 32.1685 2.10954 30.6756 0.660322 27.8733C-0.051114 26.5114 -0.209211 24.8614 0.291429 24.1543C0.792069 23.5257 2.26764 24.8614 2.76828 26.3804C2.95273 26.9042 3.18987 27.009 5.19243 27.3233C7.01054 27.6114 11.1738 27.6114 13.1236 27.3233C16.6544 26.7995 19.711 25.3852 21.6081 23.421C22.4777 22.5043 22.8729 21.771 22.8729 20.9853C22.8729 20.5139 22.7939 20.3567 22.2142 19.7543C19.8164 17.2139 15.1525 15.8258 7.95912 15.433C6.14101 15.3544 5.50862 15.3544 4.40195 15.5377L3.03177 15.7211L2.58383 15.3544C2.32034 15.1711 1.9251 14.6735 1.68795 14.3068C1.34541 13.7306 1.26636 13.4687 1.24001 12.8925C1.24001 12.4735 1.29271 12.1068 1.34541 12.0283C1.39811 11.9759 2.55748 11.4521 3.92766 10.8497C10.6731 7.86403 17.1814 4.14503 17.8929 2.83553C18.0773 2.46887 18.1037 2.31173 17.9719 1.8403C17.7611 1.02841 17.7875 0.399846 18.0246 0.190325C18.2881 -0.0715758 18.3935 -0.0715758 18.8942 0.242706C20.2907 1.08079 21.6872 4.56408 21.371 6.31881C21.1866 7.28785 20.9231 7.78546 20.1853 8.59735C19.3157 9.56639 17.6294 10.6402 14.9944 11.9235C13.7297 12.5259 12.8074 13.0497 12.9128 13.1021C12.9919 13.1282 13.6506 13.2592 14.3357 13.4163C18.8942 14.4378 22.5304 16.6901 24.5066 19.702C24.8755 20.2781 25.3761 21.2472 25.5869 21.8234C25.9295 22.7924 25.9558 23.0543 25.9558 24.3638C25.9558 25.5424 25.9031 25.9352 25.666 26.5114C25.218 27.6638 24.7964 28.3447 23.9796 29.209C22.2932 30.9899 19.6319 32.247 16.3383 32.8232C14.9681 33.0589 11.3319 33.0589 9.59279 32.8232Z"
        />
        <path
            d="M33.0175 18.9163C32.1216 18.5234 31.1994 16.8996 31.1994 15.7211C31.1994 15.302 31.2521 14.9616 31.3574 14.883C31.4628 14.8044 33.8079 14.6997 38.1556 14.6211C41.7918 14.5425 45.2173 14.4378 45.7179 14.3592C46.8773 14.2282 47.1408 14.3592 47.6414 15.3806C48.0367 16.1139 48.1157 17.1091 47.8259 17.371C47.2198 17.8687 39.7893 18.8377 35.547 18.9686C34.2822 18.9948 33.1492 18.9686 33.0175 18.9163Z"
        />
    </svg>

    <nav class="menu">
        <a href="/">
            <LayoutDashboard size="1em" />
            Intro
        </a>
        <a href="/">
            <CalendarDays size="1em" />
            Schedule
        </a>
        <a href="/">
            <Command size="1em" />
            FAQ
        </a>
        <a href="/">
            <BookText size="1em" />
            About
        </a>
    </nav>
    
    <nav class="user">
        <a href="/">
            <Bell size="1em" />
        </a>
        <a href="/">
            <Coffee size="1em" />
            Donate
        </a>
        <a  href="/" class="pfp" style="--bg-img:url(https://i.imgur.com/KCdqE47.png)">
            <img src="https://i.imgur.com/KCdqE47.png" alt="pfp">
        </a>
    </nav>
</header>

<style>

    :root {
        --bg-img: 'https://i.imgur.com/20Q7JDm.png';
    }

    header {
        margin-inline: var(--card-padding);
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        /* justify-items: center; */
        align-items: center;

        position: relative;
    }

    header > nav {
        background-color: color-mix(in lab, var(--clr-bg) 80%, transparent);
        border-radius: var(--border-rad);
        padding: 1.5em;

        backdrop-filter: blur(12px);

        gap: 1.5em;
    }

    a {
        display: flex;
        align-items: center;
        gap: 0.3em;
        text-decoration: none;
        color: var(--clr-text);
    }

    a:hover {
        color: var(--clr-primary);
    }

    a.pfp {
        /* background-image: var(--bg-img); */
        background-size: cover;
        background-position: center;

        height: 1.5em;
        aspect-ratio: 1;

        border-radius: 50%;
        overflow: hidden;
    }

    a.pfp > img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    nav.menu {
        z-index: 2;
    }

    nav.user {
        justify-self: end;
    }

    svg {
        justify-self: start;
    }

    nav {
        display: flex;
        list-style: none;
        font-size: 1rem;
    }

    nav.user > :not(:nth-child(1))::before {
        content: "|";
        position: absolute;
        margin-inline-start: -.8em;
        line-height: .5em;
        color: var(--clr-text);
        pointer-events: none;
        opacity: .5;
    }
</style>
