export default defineEventHandler(async (event) => {

    const { code } = event.context.params

    //Way of getting the data in the nuxt.config.ts file
    const { currencyKey } = useRuntimeConfig()

    const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`

    const { data } = await $fetch(uri)

    return data

})