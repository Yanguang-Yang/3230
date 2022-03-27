<template>
    <div class="HomeList">
    <table>
        <tbody v-bind:key="home.id" v-for="home in homes">
            <tr>
                <td> Your username is </td> <td class = 'front'> {{home.username}}</td>
            </tr>
            <br />
            <tr class = 'front'> Contact info: </tr>
            <br />
            <tr>
                <td class = 'front'> E-mail: </td> <td> {{home.email}}</td>
            </tr>
            <tr>
                <td class = 'front'> Phone: </td> <td> {{home.phone}}</td>
            </tr>
            <tr>
                <td class = 'front'> Website: </td> <td> {{home.website}}</td>
            </tr>
            <tr>
                <td class = 'front'> Company: </td> <td> {{home.company.name}}</td>
            </tr>
            <br />
            <tr class = 'front'> Address: </tr>
            <br />
            <tr>
                <td class = 'front'> Street: </td> <td> {{home.address.street}}</td>
            </tr>
            <tr>
                <td class = 'front'> Suite: </td> <td> {{home.address.suite}}</td>
            </tr>
            <tr>
                <td class = 'front'> City: </td> <td> {{home.address.city}}</td>
            </tr>
            <tr>
                <td class = 'front'> Zipcode: </td> <td> {{home.address.zipcode}}</td>
            </tr>
            <br />
            <tr>
                <td class> Your catch phrase is </td> <td class = 'front'> {{home.company.catchPhrase}}</td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
export default {
    name:'HomeList',
    props:{
        homes: Array
    }
}
</script>

<style scoped lang="scss">
.front{
    font-weight: bold;
}
</style>