<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <router-link class="navbar-brand" :to="{ name: 'home' }">Portfolio</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <!-- home -->
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page"
                                :to="{ name: 'home' }">Home</router-link>
                        </li>
                        <!-- contacts -->
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" :to="{ name: 'contacts' }">Contact
                                Us</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>