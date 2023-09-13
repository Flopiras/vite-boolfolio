<template>
    <header class="text-center">
        <h1>Contattaci</h1>
        <p class="mt-3 fs-5">Compila il form per mandare un messaggio all'autore dei progetti</p>
    </header>
    <!-- form -->
    <form class="mt-5">
        <!-- email -->
        <div class="mb-3">
            <label for="email" class="form-label">Indirizzo email</label>
            <input type="email" class="form-control" id="email" placeholder="name@example.com">
            <small class="ms-2">A questo indirizzo riceverai la risposta</small>
        </div>

        <!-- email subject -->
        <div class="mb-3">
            <label for="subject" class="form-label">Oggetto della mail</label>
            <input type="text" class="form-control" id="subject" placeholder="Oggetto">
        </div>

        <!-- content -->
        <div class="mb-3">
            <label for="content" class="form-label">Contenuto della mail</label>
            <textarea class="form-control" id="content" rows="5"></textarea>
        </div>

        <!-- button -->
        <div class="d-flex justify-content-end mt-4">
            <button class="btn btn-success">Invia</button>
        </div>
    </form>
</template>