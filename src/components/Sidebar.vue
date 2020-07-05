<template>
    <nav class="sidebar main-bg-color-vertical">
        <div class="sidebar-sticky">
            <ul class="nav flex-column">
                <p class="sidebar-navblock-header">
                    Favourites
                </p>
         
                    <li class="nav-item">
                        <a class="nav-link" href="">
                            <i class="fa_left fas fa-star"></i>
                            <i class="fa_left itemIcon"></i>
                            <span class="label">itemName</span>
                            <i class="fa_right fas fa-caret-right"></i>
                        </a>
                    </li>
           
            </ul>
            <hr>
            <ul class="nav flex-column">
                <p class="sidebar-navblock-header">
                    Logs
                </p>
                <li class="nav-item">
                    <a class="nav-link" href="/logs/windows">
                        <i class="fa_left fab fa-windows"></i>
                        <span class="label">Windows</span>
                        <i class="fa_right fas fa-caret-right"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/logs/firewall">
                        <i class="fa_left fas fa-fire"></i>
                        <span class="label">Firewall</span>
                        <i class="fa_right fas fa-caret-right"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/logs/isensor">
                        <i class="fa_left fas fa-server"></i>
                        <span class="label">iSensor</span>
                        <i class="fa_right fas fa-caret-right"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/logs/redcloak">
                        <i class="fa_left fas fa-microchip"></i>
                        <span class="label">Redcloak Events</span>
                        <i class="fa_right fas fa-caret-right"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/logs/lastline">
                        <i class="fa_left fas fa-balance-scale"></i>
                        <span class="label">Lastline Traffic</span>
                        <i class="fa_right fas fa-caret-right"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/logs/dns">
                        <i class="fa_left fas fa-binoculars"></i>
                        <span class="label">DNS</span>
                        <i class="fa_right fas fa-caret-right"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/logs/vpn">
                        <i class="fa_left fas fa-shield-alt"></i>
                        <span class="label">VPN</span>
                        <i class="fa_right fas fa-caret-right"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/logs/web">
                        <i class="fa_left fas fa-globe"></i>
                        <span class="label">Web Traffic</span>
                        <i class="fa_right fas fa-caret-right"></i>
                    </a>
                </li>
            </ul>
            <hr>
            <ul class="nav flex-column">
                <p class="sidebar-navblock-header">
                    Feeds
                </p>
                <li class="nav-item">
                    <a class="nav-link" href="/feeds/twitter">
                        <i class="fa_left fab fa-twitter"></i>
                        <span class="label">Twitter</span>
                        <i class="fa_right fas fa-caret-right"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/feeds/rss">
                        <i class="fa_left fas fa-rss"></i>
                        <span class="label">RSS</span>
                        <i class="fa_right fas fa-caret-right"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/feeds/osint">
                        <i class="fa_left fab fa-osi"></i>
                        <span class="label">OSINT</span>
                        <i class="fa_right fas fa-caret-right"></i>
                    </a>
                </li>
            </ul>
            <hr>
            <ul class="nav flex-column">
                <p class="sidebar-navblock-header">
                    Reports
                </p>
                <li class="nav-item">
                    <a class="nav-link" href="/reports/kpis">
                        <i class="fa_left fas fa-key"></i>
                        <span class="label">Monthly KPIs</span>
                        <i class="fa_right fas fa-caret-right"></i>

                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/reports/incident-response">
                        <i class="fa_left fas fa-fingerprint"></i>
                        <span class="label">IR Playbooks</span>
                        <i class="fa_right fas fa-caret-right"></i>

                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/reports/monthly">
                        <i class="fa_left fas fa-filter"></i>
                        <span class="label">Monthly Reports</span>
                        <i class="fa_right fas fa-caret-right"></i>
                    </a>
                </li>
            </ul>
            <hr>
            <ul class="nav flex-column">
                <p class="sidebar-navblock-header">
                    Security Tools
                </p>
                <li class="nav-item">
                    <a class="nav-link" href="#" target="_blank">
                        <i class="fa_left fas fa-life-ring"></i>
                        <span class="label">Lastline</span>
                        <i class="fa_right fas fa-external-link-alt"></i>

                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" target="_blank">
                        <i class="fa_left fas fa-procedures"></i>
                        <span class="label">Redcloak</span>
                        <i class="fa_right fas fa-external-link-alt"></i>

                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" target="_blank">
                        <i class="fa_left fas fa-bug"></i>
                        <span class="label">Secureworks Portal</span>
                        <i class="fa_right fas fa-external-link-alt"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" target="_blank">
                        <i class="fa_left fas fa-signature"></i>
                        <span class="label">Zonefox</span>
                        <i class="fa_right fas fa-external-link-alt"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" target="_blank">
                        <i class="fa_left fas fa-greater-than"></i>
                        <span class="label">Splunk</span>
                        <i class="fa_right fas fa-external-link-alt"></i>
                    </a>
                </li>
            </ul>
            <hr>
            <ul class="nav flex-column">
                <p class="sidebar-navblock-header">
                    Intelligence Accounts
                </p>
                <li class="nav-item">
                    <a class="nav-link" href="#" target="_blank">
                        <i class="fa_left fab fa-twitter"></i>
                        <span class="label">Twitter</span>
                        <i class="fa_right fas fa-external-link-alt"></i>

                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" target="_blank">
                        <i class="fa_left fab fa-facebook"></i>
                        <span class="label">Facebook</span>
                        <i class="fa_right fas fa-external-link-alt"></i>

                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" target="_blank">
                        <i class="fa_left fab fa-instagram"></i>
                        <span class="label">Instagram</span>
                        <i class="fa_right fas fa-external-link-alt"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" target="_blank">
                        <i class="fa_left fab fa-google"></i>
                        <span class="label">GSE</span>
                        <i class="fa_right fas fa-external-link-alt"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" target="_blank">
                        <i class="fa_left fab fa-linkedin"></i>
                        <span class="label">Linked-In</span>
                        <i class="fa_right fas fa-external-link-alt"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" target="_blank">
                        <i class="fa_left fas fa-envelope"></i>
                        <span class="label">Gmail</span>
                        <i class="fa_right fas fa-external-link-alt"></i>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>