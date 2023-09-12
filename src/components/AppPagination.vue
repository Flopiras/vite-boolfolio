<script>
export default {
    name: 'AppPagination',
    props: { links: Array },
    emit: ['change-page']
};
</script>

<template>
    <div class="d-flex justify-content-center mb-4">
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item" :class="[{ active: link.active }, { disabled: !link.url }]" v-for="link in links"
                    :key="link.label">
                    <button @click="$emit('change-page', link.url)" class="page-link" v-html="link.label"></button>
                </li>
            </ul>
        </nav>
    </div>
</template>